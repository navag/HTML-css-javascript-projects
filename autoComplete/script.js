const STATES = [
  'Ahmednagar',
  'Akola',
  'Amravati',
  'Aurangabad',
  'Beed',
  'Bhandara',
  'Buldhana',
  'Chandrapur',
  'Dhule',
  'Gadchiroli',
  'Gondia',
  'Hingoli',
  'Jalgaon',
  'Jalna',
  'Kolhapur',
  'Latur',
  'Mumbai City',
  'Mumbai Suburban',
  'Nagpur',
  'Nanded',
  'Nandurbar',
  'Nashik',
  'Osmanabad',
  'Palghar',
  'Parbhani',
  'Pune',
  'Raigad',
  'Ratnagiri',
  'Sangli',
  'Satara',
  'Sindhudurg',
  'Solapur',
  'Thane',
  'Wardha',
  'Washim',
  'Yavatmal',
];
const input = document.getElementById('input-box');
const ddlWrapper = document.getElementById('dropdownn-list');
const closeBtn = document.getElementById('close');

const debounce = (fun, dealy = 500) => {
  let timer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => fun.apply(context, args), dealy);
  }
}

export const getOptions = (keyWord) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = STATES.filter(state => state.substring(0, keyWord.length).toLowerCase() === keyWord.toLowerCase())
      resolve(result);
    }, 1000);
  })
}

const resetState = () => {
  ddlWrapper.style.display = 'none';
};

const renderDropDOwnItems = (list) => {
  ddlWrapper.innerHTML = '';
  const ddlItems = document.createDocumentFragment();
  list.forEach(city => {
    const ddlItem = document.createElement('div');
    ddlItem.innerHTML = city;
    ddlItem.classList.add('dropdown-item');
    ddlItems.appendChild(ddlItem);
  });
  ddlWrapper.appendChild(ddlItems);
}

const addLoader = () => {
  const ddlItem = document.createElement('div');
  ddlItem.innerHTML = 'Loading....';
  ddlItem.classList.add('dropdown-item');
  ddlWrapper.appendChild(ddlItem);
}

const handleInputChange = (e) => {
  if (e.target.value) {
    ddlWrapper.innerHTML = '';
    ddlWrapper.style.display = 'inline-block';
    addLoader();
    getOptions(e.target.value).then(res => {
      console.log(res);
      renderDropDOwnItems(res);
    });
  } else {
    resetState();
  }
}

const handleCloseClick = () => {
  input.value = '';
  resetState();
}

const handleSelection = (e) => {
  input.value = e.target.innerHTML;
  resetState();
}

input.addEventListener('input', debounce(handleInputChange, 500));
closeBtn.addEventListener('click', handleCloseClick);
//event delegation
ddlWrapper.addEventListener('click', handleSelection);

