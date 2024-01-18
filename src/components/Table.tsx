'use client';
import { searchContext } from '@/contexts/homeContext';
import { useContext, useState } from 'react';
import { BsPen } from 'react-icons/bs';
import { RiDeleteBin5Line } from 'react-icons/ri';

export default function Table() {
  const { filteredCustomers, setIdForDelete } = useContext(searchContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className='relative overflow-y-auto rounded-xl h-[45rem]'>
      <table className='w-full text-sm text-left text-gray-800'>
        <thead className='text-xs text-gray-400 uppercase bg-zinc-100'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              Name of Customer
            </th>
            <th scope='col' className='px-6 py-3'>
              Gender
            </th>
            <th scope='col' className='px-6 py-3'>
              Date of Birth
            </th>
            <th scope='col' className='px-6 py-3'>
              Age
            </th>
            <th scope='col' className='px-6 py-3'>
              City
            </th>
            <th scope='col' className='px-6 py-3'>
              State
            </th>
            <th scope='col' className='px-6 py-3'>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers?.map(
            ({ id, fullName, gender, dateOfBirth, age, city_id }) => {
              return (
                <tr className='bg-white border-b' key={id}>
                  <th
                    scope='row'
                    className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'
                  >
                    {fullName}
                  </th>
                  <td className='px-6 py-4'>{gender}</td>
                  <td className='px-6 py-4'>{dateOfBirth}</td>
                  <td className='px-6 py-4'>{age}</td>
                  <td className='px-6 py-4'>{city_id.name}</td>
                  <td className='px-6 py-4'>{city_id.state}</td>
                  <td className='px-6 py-4 text-lg'>
                    <button>
                      <BsPen />
                    </button>
                    <button className='pl-3' onClick={() => setIsOpen(!isOpen)}>
                      <RiDeleteBin5Line />
                      {isOpen && (
                        <div className='fixed top-0 left-0 z-10 backdrop-blur-sm w-screen h-screen flex justify-center pt-20'>
                          <div className='w-96 h-40 bg-white flex flex-col gap-5 p-5 rounded-xl items-center justify-center'>
                            <h3 className='text-xl font-semibold'>
                              Are you sure you want to delete this customer?
                            </h3>
                            <button
                              className='font-bold text-red-500 text-xl py-1 px-2 hover:bg-red-100 rounded-lg'
                              onClick={() => setIdForDelete(id)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      )}
                    </button>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
}
