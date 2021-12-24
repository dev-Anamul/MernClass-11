/* eslint-disable array-callback-return */
/* eslint-disable no-undef */
/// //// developer section render functionality

/// /// selecting html element here
const devWrapper = document.querySelector('.developer__card__section');
const studentWrapper = document.querySelector('.student__info__item');
const tableBody = document.querySelector('.table > tbody');
tableBody.id = 'thisis';
console.log(tableBody);

const studentDiv = document.querySelector('.students__card__wrapper');
console.log(studentDiv);

/// //// loop function here

/// /////////// show developer data funciton here
const showDeveloperData = function (developersData) {
    developersData.map((data) => {
        const html = `<div class="developer__card__item">
<div class="developer__card__front">
  <div class="developer__front__container">
    <div class="developer__front__heading__box">
      <h1 class="developer__front__heading">Developer</h1>
      <h1>${data.Name}</h1>
      <p>Please hover for details</p>
    </div>
    <div class="developer__front__img">
      <img
        src="${data.img}"
      />
    </div>
  </div>
</div>
<div class="developer__card__back">
  <div class="developer__card__back__details">
    <h1 class="developer__name">${data.Name}</h1>
    <h3 class="developer__skill"><span>Skill:</span>${data.Skill}</h3>
    <h3 class="developer__location">
      <span>Location:</span>${data.Loc}
    </h3>
    <p class="developer__description">
      ${data.description}
    </p>
  </div>
</div>
</div>`;
        devWrapper.innerHTML += html;
    });
};
showDeveloperData(developersData);
/// /////// students render functionality

student.map((data) => {
    const html = `
  <div class="student__info__card">
  <div class="student__info__img">
    <img
      src="${data.img}"
      alt="student Image"
    />
  </div>
  <div class="student__info__details">
    <h1 class="sudent__name">${data.Name}</h1>
    <h3 class="student__id">
      <span>ID: ${data.id}</span><span>Age: ${data.age}</span>
    </h3>
    <h3 class="student__location">
      <span>Gender: ${data.Gender}</span><br /><span>Location: ${data.Loc}</span>
    </h3>
  </div>
</div>`;

    /// ////// render into student info item
    studentWrapper.innerHTML += html;
    return false;
});

/// ///// family data rendering functionality

family.map((fdata, i) => {
    tableBody.innerHTML += `
      <tr>
        <td>${i + 1}</td>
        <td>${fdata.Name}</td>
        <td>${fdata.loc}</td>
        <td>${fdata.rel}</td>
        <td>${fdata.phn}</td>
        <td><img src='${fdata.img} />'</td>
      </tr>`;
    return false;
});

/// ////// second student card elements

student.forEach((data) => {
    studentDiv.innerHTML += ` <div class="students__card">
  <div class="front__side">
    <img
      src="${data.img}"
      alt="Studetns Image"
    />
    <div class="students__details">
      <h1>${data.Name}</h1>
      <h2>Age &nbsp; : &nbsp; ${data.age}</h2>
      <h2>Gender &nbsp; : &nbsp; ${data.Gender}</h2>
      <h2>Location &nbsp; : &nbsp; ${data.Loc}</h2>
    </div>
  </div>
  <div class="back__side">
    <table class="table mark__table" border="1">
      <caption>
        Student Marks
      </caption>
      <thead>
        <tr>
          <th>Subject</th>
          <th>Marks</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Bangla</td>
          <td>${data.marks.Bangla}</td>
        </tr>
        <tr>
          <td>English</td>
          <td>${data.marks.English}</td>
        </tr>
        <tr>
          <td>Math</td>
          <td>${data.marks.math}</td>
        </tr>
        <tr>
          <td>Science</td>
          <td>${data.marks.Science}</td>
        </tr>
        <tr>
          <td>Accounting</td>
          <td>${data.marks.Accounting}</td>
        </tr>
        <tr>
          <td>Religion</td>
          <td>${data.marks.Religion}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`;
});
