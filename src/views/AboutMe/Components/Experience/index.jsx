import React from "react";

function Experience({
  jobTitle,
  company,
  from,
  yearFrom,
  to,
  yearTo,
  description,
}) {
  return (
    <div className="px-10 py-5 ">
      <div className="text-xl font-semibold mt-5 lg:mt-0">
        {jobTitle} | {company}
      </div>
      <div>
        {from} {yearFrom} - {to} {yearTo}
      </div>
      <hr className="my-5" />
      <div>{description}</div>
    </div>
  );
}

export default Experience;
