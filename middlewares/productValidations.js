const validName = async (name) => {
  if (!name) {
    return { error: { code: 404, message: 'name is required' } };
  }

  if (name.length < 5) {
    return { error: {
      code: 422,
      message: 'name length must be at least 5 characters long',
    } };
  }
};

module.exports = {
  validName,
};