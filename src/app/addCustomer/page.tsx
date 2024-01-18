'use client';
import { searchContext } from '@/contexts/homeContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type TFormRegisterCustomerSchema = z.infer<typeof formRegisterCustomerSchema>;

const formRegisterCustomerSchema = z.object({
  fullName: z.string().min(3, 'Minimum of 3 characters'),
  gender: z.string(),
  dateOfBirth: z.string(),
  age: z.string().min(1, 'Required Field'),
  city_id: z.string().transform((value) => Number(value)),
});

export default function AddCustomer() {
  const { filteredCities, setRegisterCustomer } = useContext(searchContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormRegisterCustomerSchema>({
    resolver: zodResolver(formRegisterCustomerSchema),
  });

  const handleRegisterCustomer = (data: TFormRegisterCustomerSchema) => {
    setRegisterCustomer(data);
  };

  return (
    <section className='p-10 flex flex-col gap-10 w-full'>
      <h2 className='text-3xl font-bold'>Add New Customer</h2>
      <form
        onSubmit={handleSubmit(handleRegisterCustomer)}
        className='p-5 bg-white flex flex-col gap-3 w-96 rounded-lg'
      >
        <div className='flex flex-col gap-1'>
          <label htmlFor='fullName' className='font-semibold'>
            Full Name
          </label>
          <input
            type='text'
            className='border rounded-lg py-1 px-2'
            {...register('fullName')}
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='gender' className='font-semibold'>
            Gender
          </label>
          <select
            id='gender'
            className='border rounded-lg py-1 px-2'
            {...register('gender')}
          >
            <option value='MALE'>MALE</option>
            <option value='FEMALE'>FEMALE</option>
          </select>
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='date' className='font-semibold'>
            Date Of Birth
          </label>
          <input
            type='date'
            className='border rounded-lg py-1 px-2'
            {...register('dateOfBirth')}
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='age' className='font-semibold'>
            Age
          </label>
          <input
            type='text'
            className='border rounded-lg py-1 px-2'
            {...register('age')}
          />
        </div>
        <div className='flex flex-col gap-3'>
          <div className='flex flex-col gap-1'>
            <label htmlFor='city' className='font-semibold'>
              City
            </label>
            <select
              {...register('city_id')}
              id='city'
              className='border rounded-lg py-1 px-2'
            >
              <option value=''></option>
              {filteredCities?.map(({ id, name }) => {
                return (
                  <option key={id} value={id.toFixed()}>
                    {name}
                  </option>
                );
              })}
            </select>
            {errors.city_id && <p>{errors.city_id.message}</p>}
          </div>
        </div>

        <button
          type='submit'
          className='text-lg font-bold hover:bg-zinc-100 rounded-lg p-1'
        >
          Submit
        </button>
      </form>
    </section>
  );
}
