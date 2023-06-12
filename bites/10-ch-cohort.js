const cohort = {
  name: "May2022",
  id: 666,
  studentNames: ["Thomas", "Richard", "Harold"],
};

const printInfo = (cohort) => {
  console.log(
    `${cohort.id} - ${cohort.name} - ${cohort.studentNames.length} students in this cohort`
  );
};

printInfo(cohort);
