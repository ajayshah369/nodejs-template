const titleCaseFormatter = (v) => {
  return v
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

module.exports = {
  titleCaseFormatter,
};
