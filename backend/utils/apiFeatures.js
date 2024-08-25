class APIFeatures {
  constructor(query, queryString, aggregate = false) {
    this.query = query;
    this.queryString = queryString;
    this.aggregate = aggregate;
  }

  convertToNumbers(obj) {
    for (let key in obj) {
      if (typeof obj[key] === "object") {
        this.convertToNumbers(obj[key]);
      } else if (typeof obj[key] === "string" && !isNaN(obj[key])) {
        obj[key] = parseFloat(obj[key]);
      }
    }
  }

  filter() {
    const queryObj = { ...this.queryString.filters };
    const excludedFields = ["sortBy", "query"];
    excludedFields.forEach((el) => {
      delete queryObj[el];
    });

    const andQueries = [];

    for (let [key, value] of Object.entries(queryObj)) {
      if (Array.isArray(value)) {
        if (key === 'price') {
          // Process price queries
          const priceConditions = value.map(val => {
            if (val.includes('Under')) {
              const maxPrice = parseFloat(val.split(' ')[1]);
              return { price: { $lte: maxPrice } };
            } else if (val.includes('to')) {
              const [minPrice, maxPrice] = val.split(' to ').map(Number);
              return { price: { $gte: minPrice, $lte: maxPrice } };
            }
          }).filter(Boolean);
          if (priceConditions.length) {
            andQueries.push({ $or: priceConditions });
          }
          delete queryObj[key];  // Remove after processing
        } else if (key === 'rating') {
          // Process rating queries
          const ratingConditions = value.map(val => {
            const minRating = parseFloat(val.split(' ')[0]);
            return { rating: { $gte: minRating } };
          }).filter(Boolean);
          if (ratingConditions.length) {
            andQueries.push({ $or: ratingConditions });
          }
          delete queryObj[key];  // Remove after processing
        } else if (key === 'duration') {
          // Process duration queries
          const durationConditions = value.map(val => {
            const [minDays, maxDays] = val.split(' to ').map(part => parseInt(part));
            return { duration: { $gte: minDays, $lte: maxDays } };
          }).filter(Boolean);
          if (durationConditions.length) {
            andQueries.push({ $or: durationConditions });
          }
          delete queryObj[key];  // Remove after processing
        } else if (key === 'topics') {
          // Process topics queries for nested topicName
          const topicsConditions = value.map(topic => {
            return { topics: { $elemMatch: { topicName: topic } } };
          });
          if (topicsConditions.length) {
            andQueries.push({ $or: topicsConditions });
          }
          delete queryObj[key];  // Remove after processing
        } else {
          // Use $in for other categorical filters
          queryObj[key] = { $in: value };
        }
      }
    }

    // Apply non-AND conditions directly to the queryObj
    Object.entries(queryObj).forEach(([key, condition]) => {
      if (typeof condition === 'object') {
        andQueries.push({ [key]: condition });
      }
    });

    //console.log(JSON.stringify(andQueries));

    // Add all conditions to the main query
    if (andQueries.length > 0) {
      if (this.aggregate) {
        this.convertToNumbers(andQueries);
        this.query = this.query.match({ $and: andQueries });
      } else {
        this.query = this.query.find({ $and: andQueries });
      }
    }

    return this;
  }

    sorting() {
      //3) Sorting
  
      if (this.queryString.sortBy) {
        const sortBy = this.queryString.sortBy.split(",").join(" ");
        this.query = this.query.sort(`-${sortBy}`);
      }
      return this;
    }
    limiting() {
      //4) Limiting
      if (this.queryString.fields) {
        const fields = this.queryString.fields.split(",").join(" ");
        if (this.aggregate) {
          this.query.project(fields);
        } else {
          this.query = this.query.select(fields);
        }
      } else if (!this.aggregate) {
        this.query = this.query.select(
          "-__v -passwordChangedAt -passwordResetToken -passwordResetExpires"
        );
      }
      return this;
    }
    paginating() {
      //5) Pagination
      const page = this.queryString.page * 1 || 1;
      const limit = this.queryString.limit * 1 || 30;
      const skip = (page - 1) * limit;
      if (this.aggregate) {
        //this.query = this.query.skip(skip).limit(limit);  ?? not working
      } else {
        this.query = this.query.skip(skip).limit(limit);
      }
      return this;
    }
  }
  module.exports = APIFeatures;
  