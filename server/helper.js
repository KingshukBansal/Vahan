// Function to calculate offset for pagination
function getOffset(currentPage = 1, listPerPage) {
  return (currentPage - 1) * listPerPage; // Calculate offset based on current page and items per page
}

// Function to return empty array if no rows are returned from the database
function emptyOrRows(rows) {
  if (!rows) {
      return []; // Return empty array if no rows are returned
  }
  return rows; // Otherwise, return the rows
}

// Export the helper functions
module.exports = {
  getOffset,
  emptyOrRows
};
