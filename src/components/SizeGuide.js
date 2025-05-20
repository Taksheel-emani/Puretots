import React from "react";

const SizeGuide = () => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md w-full max-w-2xl my-6">
      <h2 className="text-2xl font-bold text-[#7CA88C] mb-4">Size & Weight Guide</h2>
      <table className="w-full text-left border border-gray-300">
        <thead className="bg-[#FDF8F3] text-gray-700">
          <tr>
            <th className="p-2 border border-gray-300">Age</th>
            <th className="p-2 border border-gray-300">Height (inches)</th>
            <th className="p-2 border border-gray-300">Weight (lbs)</th>
            <th className="p-2 border border-gray-300">Size</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border">0-3 months</td>
            <td className="p-2 border">18-22</td>
            <td className="p-2 border">6-12</td>
            <td className="p-2 border">NB</td>
          </tr>
          <tr>
            <td className="p-2 border">3-6 months</td>
            <td className="p-2 border">22-25</td>
            <td className="p-2 border">12-17</td>
            <td className="p-2 border">S</td>
          </tr>
          <tr>
            <td className="p-2 border">6-12 months</td>
            <td className="p-2 border">25-28</td>
            <td className="p-2 border">17-22</td>
            <td className="p-2 border">M</td>
          </tr>
          <tr>
            <td className="p-2 border">1-2 years</td>
            <td className="p-2 border">28-32</td>
            <td className="p-2 border">22-27</td>
            <td className="p-2 border">L</td>
          </tr>
          <tr>
            <td className="p-2 border">2-5 years</td>
            <td className="p-2 border">32-40</td>
            <td className="p-2 border">27-38</td>
            <td className="p-2 border">XL</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SizeGuide;
