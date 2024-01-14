import { BsPen } from 'react-icons/bs';
import { RiDeleteBin5Line } from 'react-icons/ri';

export default function Table() {
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
          <tr className='bg-white border-b'>
            <th
              scope='row'
              className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'
            >
              Esdras Gabriel Farias dos Santos
            </th>
            <td className='px-6 py-4'>MALE</td>
            <td className='px-6 py-4'>2001-12-15</td>
            <td className='px-6 py-4'>22</td>
            <td className='px-6 py-4'>Surubim</td>
            <td className='px-6 py-4'>Pernambuco</td>
            <td className='px-6 py-4'>
                <button>
                    <BsPen />
                </button>
                <button className='pl-3'>
                    <RiDeleteBin5Line />
                </button>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}
