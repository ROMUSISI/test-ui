import React, {useState} from 'react'

const staff = [
    {
        id: 1,
        name: 'Jim',
        address: 'Dubai'
    },

    {
        id: 2,
        name: 'Robert',
        address: 'USA'
    },

    {
        id: 3,
        name: 'Gordon',
        address: 'Britain'
    },

    {
        id: 4,
        name: 'Seseko',
        address: 'Congo'
    }
];


function SearchBar() {

    const [displayArray, setDisplayArray] = useState (staff);

    const [query, setQuery] = useState ('');

const handleOnChange = (event) => {
    setQuery (event.target.value)
    console.log (query)

    const filteredArray = staff.filter ((member) => 
        member.name.toLowerCase().includes(query.toLocaleLowerCase()) ||
        member.address.toLowerCase().includes(query.toLocaleLowerCase())
    )

     console.log (filteredArray);

    setDisplayArray (filteredArray);

}

  return (
    <div>

      <div className='search-bar-div'>
        <input 
            type="text"
            onChange={() => handleOnChange (event)}
            placeholder='search'
        />
      </div>

      <div className='list-container'>
        {
            displayArray.map ((member) => {
                return (
                    <li>
                        <div>{member.name}</div>
                        <div>{member.address}</div>
                        <div>{member.id}</div>
                    </li>
                )
            })
        }
      </div>

    </div>
  )
}

export default SearchBar;
