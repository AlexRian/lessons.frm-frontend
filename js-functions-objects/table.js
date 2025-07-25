const table = document.getElementsByTagName('tbody')[0];
const companyInput = document.getElementById('companyInput');
const contactInput = document.getElementById('contactInput');
const countryInput = document.getElementById('countryInput');
const saveButton = document.getElementById('save');

const attachDeleteEvent = () => {
    const companies = document.querySelectorAll('tr .company');

    for (let index = 0; index < companies.length; index++) {
        const company = companies[index];

        company.onclick = (e) => {
            e.target.parentElement.remove();
        }
    }
}

attachDeleteEvent();

saveButton.onclick = () => {
    const row = `<tr>
                    <td class="company">${companyInput.value}</td>
                    <td>${contactInput.value}</td>
                    <td>${countryInput.value}</td>
                </tr>`

    table.innerHTML += row;

    attachDeleteEvent();
}


