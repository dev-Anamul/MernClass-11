/* eslint-disable func-names */
/// /// selecting btn element
const btnFormWrapper = document.querySelector('.btn__form');

/// ///// variable
let showTable = false;
let btn;
/// /////// rendering html
const htmlBtn = '<button class="btn">Add New Developer</button>';
const htmlForm = `<form action="#">
<div class="input__field">
  <label class="input__label" for="name">Name :</label>
  <input
    type="text"
    id="name"
    placeholder="Enter Developer Name"
    class="input__box"
  />
</div>
<div class="input__field">
  <label class="input__label" for="skill">Skill: </label>
  <input
    type="text"
    id="skill"
    placeholder="Enter Developer Skill"
    class="input__box"
  />
</div>
<div class="input__field">
  <label class="input__label" for="Location">Location : </label>
  <input
    type="text"
    id="Location"
    placeholder="Enter Developer Location"
    class="input__box"
  />
</div>
<div class="input__field">
  <label class="input__label" for="img">Image Link : </label>
  <input
    type="text"
    id="img"
    placeholder="Enter Developer Image Link"
    class="input__box"
  />
</div>
<div class="input__field">
  <label class="input__label" for="Description">Description : </label>
  <input
    type="text"
    id="Description"
    placeholder="Enter Developer Image Link"
    class="input__box"
  />
</div>
<div class="input__field">
  <button type="submit" class="btn form__btn">Add Developer</button>
</div>
</form>`;
/// ////// show table btn funciton
const showTableBtn = function (showTablepara) {
    if (showTablepara) {
        btnFormWrapper.innerHTML = htmlForm;
    } else {
        btnFormWrapper.innerHTML = htmlBtn;
        btn = document.querySelector('.btn');
        console.log(btn);
    }
};
showTableBtn(showTable);
/// ///// variable

btn.addEventListener('click', (e) => {
    console.log(btn);
    e.preventDefault();

    showTable = !showTable;

    showTableBtn(showTable);

    /// ///// selectin formbtn
    const formBtn = document.querySelector('.form__btn');

    formBtn.addEventListener('click', (ev) => {
        ev.preventDefault();

        /// ///////// selecting element
        const Name = document.getElementById('name').value;
        const Skill = document.getElementById('skill').value;
        const Loc = document.getElementById('Location').value;
        const img = document.getElementById('img').value;
        const description = document.getElementById('Description').value;

        /// /////// define an object
        const devObj = {
            Id: Math.random(),
            Name,
            Skill,
            Loc,
            description,
            img,
        };

        developersData.push(devObj);

        /// ////////// update developer data
        showDeveloperData(developersData);

        /// /// table show property
        showTable = !showTable;
        showTableBtn(showTable);
    });
});

/// ////// form functionality
