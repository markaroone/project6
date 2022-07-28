class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    // Filtering
    const queryObj = { ...this.queryString };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];

    excludedFields.forEach((el) => delete queryObj[el]);

    // Advanced filtering
    let queryStr = JSON.stringify(queryObj);

    console.log(queryStr);
    queryStr = JSON.parse(
      queryStr.replace(/\b(gte|gt|lte|lt|ne|eq)\b/g, (match) => `$${match}`)
    );

    console.log(queryStr);

    this.query = this.query.find(queryStr);
    // this.query = this.query.find(queryObj); -> You can use this directly provided that you included '$' in the query

    return this;
  }

  sort() {
    if (this.queryString.sort) {
      // const sortBy = req.query.sort.split(',').join(' ');
      const sortBy = this.queryString.sort.replaceAll(',', ' ');

      this.query = this.query.sort(sortBy);

      // sort('price ratingsAverage -ratingsQuantity') -> This is how we sort by multiple
    } else {
      this.query = this.query.sort('createdAt');
    }

    return this;
  }

  limitFields() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.replaceAll(',', ' ');
      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select('-__v');
    }

    return this;
  }

  paginate() {
    const page = +this.queryString.page || 1;
    const limit = +this.queryString.limit || 100;
    const skip = (page - 1) * limit;

    this.query = this.query.skip(skip).limit(limit);

    return this;
  }
}

module.exports = APIFeatures;
