api()
  .then(function (result) {
    return api2();
  })
  .then(function (result) {
    return api3();
  })
  .then(function (result) {
    // do work
  })
  .catch(function (error) {
    // handle error
  });

api(function (result) {
  api2(function (result2) {
    api3(function (result3) {
      // do work
      if (error) {
        //do something
      } else {
        //do something
      }
    });
  });
});
