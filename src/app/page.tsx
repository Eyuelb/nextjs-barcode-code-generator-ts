"use client";
import Barcode from "./_components/barcode";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-10">
      <h1>Barcode Example</h1>
      <Barcode
        initialValues={{
          name: "",
          age: "",
        }}
        options={{
          width: 1,
          height: 70,
        }}
      >
        {({ register }) => (
          <div className=" flex flex-col gap-2">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-medium text-gray-900"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-md w-full p-1.5 "
                {...register('name')}

              />
            </div>
            <div>
              <label
                htmlFor="age"
                className="block text-xs font-medium text-gray-900 "
              >
                Age
              </label>
              <input
                type="number"
                id="age"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-md w-full p-1.5"
                {...register('age')}
              />
            </div>
          </div>
        )}
      </Barcode>
    </main>
  );
}
