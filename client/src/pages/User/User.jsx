import React from "react";

function User() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (!currentUser) {
    return <p className="p-4 text-center text-red-500">Please login first.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6">
        Welcome, {currentUser.username}!
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="font-semibold mb-2">My Orders</h2>
          <p>View your recent orders here.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="font-semibold mb-2">Messages</h2>
          <p>Check messages from sellers or buyers.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="font-semibold mb-2">Profile</h2>
          <p>Manage your account details and preferences.</p>
        </div>
      </div>
    </div>
  );
}

export default User;
