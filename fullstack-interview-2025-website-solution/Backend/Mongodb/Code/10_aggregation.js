db.users.aggregate([
  { $match: { age: { $gt: 20 } } },
  { $group: { _id: "$age", totalUsers: { $sum: 1 } } },
]);
