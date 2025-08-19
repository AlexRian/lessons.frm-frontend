const data = [
    {company: 'Alfreds Futterkiste', contact: 'Maria Anders', country: 'Germany'},
    {company: 'Centro comercial Moctezuma', contact: 'Francisco Chang', country: 'Mexico'},
    {company: 'Ernst Handel', contact: 'Roland Mendel', country: 'Austria'},
    {company: 'Island Trading', contact: 'Helen Bennett', country: 'Mexico'},
    {company: 'Laughing Bacchus Winecellars', contact: 'Yoshi Tannamuri', country: 'Germany'},
    {company: 'Magazzini Alimentari Riuniti', contact: 'Giovanni Rovelli', country: 'Italy'}
]

const table = document.getElementsByTagName('tbody')[0];
const companyInput = document.getElementById('companyInput');
const countryInput = document.getElementById('countryInput');

const renderTable = (records) => {
    table.innerHTML = '<tr><th>Company</th><th>Contact</th><th>Country</th></tr>';
    for(const record of records){
        const row = `<tr>
                    <td class="company">${record.company}</td>
                    <td>${record.contact}</td>
                    <td>${record.country}</td>
                </tr>`

        table.innerHTML += row;
    }
}

const onFilterChange = () => {
    let renderData = data;

    if(countryInput.value){
        renderData = renderData.filter(record => record.country === countryInput.value)
    }

    if(companyInput.value){
        renderData = renderData.filter(record => record.company.includes(companyInput.value))
    }

    renderTable(renderData)
}

companyInput.oninput = onFilterChange
countryInput.onchange = onFilterChange;

renderTable(data)