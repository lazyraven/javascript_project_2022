const people = [
  {
    name: "bob",
    location: { street: "123 main street", timezone: { offset: "+7:00" } },
  },
  { name: "peter", location: { street: "123 Pine street" } },
  {
    name: "susan",
    location: { street: "123 Apple street", timezone: { offset: "+9:00" } },
  },
];

people.forEach((person) => {
  //   console.log(person.name);
  //   we don't have record for timezone into the araay second oblject it'll throw error
  //   console.log(person.location.timezone.offset);
  //  so use it this one condition it will reflect undefined
  //   console.log(
  //     person &&
  //       person.location &&
  //       person.location.timezone &&
  //       person.location.timezone.offset
  //   );
  //   console.log(person?.location?.timezone?.offset);

  //   if you want any another values rather than undefined use like this
  console.log(person?.location?.timezone?.offset || "Hello Optional");
});
