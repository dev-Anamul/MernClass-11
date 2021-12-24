/* eslint-disable no-undef */
/// //// developer section render functionality

/// /// selecting html element here
const devWrapper = document.querySelector('.developer__card__section');
const studentWrapper = document.querySelector('.student__info__item');
const tableBody = document.querySelector('.table > tbody');
console.log(tableBody);
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
