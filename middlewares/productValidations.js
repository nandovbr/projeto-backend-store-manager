const validName = (req, res, next) => {
const { name } = req.body;
// console.log('topo: ', name);

  if (!name || name === undefined) {
    // console.log('primeiro if: ', name);

    return res.status(400).json({
      code: 'invalid_data',
      message: '"name" is required',
    });
  }
    // return { error: { code: 400, message: 'name is required' } };

  if (name.length < 5) {
    // console.log('segundo if: ', name);

    return res.status(422).json({
      code: 'invalid_data',
      message: '"name" length must be at least 5 characters long',
    });
  }

  next();
  //   return { error: {
  //     code: 422,
  //     message: 'name length must be at least 5 characters long',
  //   } };
  // }
};

module.exports = {
  validName,
};
