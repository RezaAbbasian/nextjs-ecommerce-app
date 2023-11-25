import { useState, useEffect } from 'react';

function AddressForm() {
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState('');

  useEffect(() => {
    // ارسال درخواست به API برای دریافت آدرس‌ها
    fetch(`${process.env.API_URL}addresses`) // مسیر API خود را قرار دهید
      .then((response) => response.json())
      .then((data) => {
        setAddresses(data); // آدرس‌ها را در وضعیت قرار دهید
      })
      .catch((error) => {
        console.error('Error fetching addresses:', error);
      });
  }, []);

  const handleSelectChange = (event) => {
    setSelectedAddress(event.target.value);
  };

  return (
    <div>
      <h2>فرم آدرس</h2>
      <form>
        <div>
          <label htmlFor="addressSelect">انتخاب آدرس:</label>
          <select
            id="addressSelect"
            name="address"
            value={selectedAddress}
            onChange={handleSelectChange}
          >
            <option value="">لطفاً یک آدرس را انتخاب کنید</option>
            {addresses.map((address) => (
              <option key={address.id} value={address.id}>
                {address.street}, {address.city}, {address.state}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">ثبت</button>
      </form>
      {selectedAddress && (
        <div>
          <h3>آدرس انتخاب شده:</h3>
          <p>{selectedAddress}</p>
        </div>
      )}
    </div>
  );
}

export default AddressForm;
