import DumbbellIcon from "@/components/common/dumbbell";
import WorkoutsLogo from "@/components/common/workouts-logo";
import Header from "@/components/layout/header";
import React, { useState } from "react";
import { Camera, User, Mail, Phone, Lock, Trash2, Save, Edit3, X } from "lucide-react";
import { useUploadPhoto } from "@/hooks/auth/use-upload-photo";

export default function SettingsPage() {
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    age: 28,
    weight: 75,
    height: 180,
    fitnessGoal: "Build Muscle",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(userData);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [profileImage, setProfileImage] = useState();

  const { uploadPhoto, isPending: isUploading } = useUploadPhoto();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Image = e.target.result as string;
        setProfileImage(base64Image);
      };
      reader.readAsDataURL(file);
      
      uploadPhoto({ photo: file });
    }
  };

  const handleSave = () => {
    setUserData(editData);
    setIsEditing(false);
    console.log("Updating user data:", editData);
  };

  const handleDeleteAccount = () => {
    console.log("Deleting account...");
    setShowDeleteModal(false);
  };

  const handleInputChange = (field, value) => {
    setEditData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  return (
    <>
      <Header />
      <div className="container font-baloo">
        <div className="relative mb-8   ">
          {/* Title  */}
          <span className="absolute sm:-top-4 ltr:left-0 rtl:right-0 rtl:left-auto ">
            <WorkoutsLogo text={"Settings"} />
          </span>

          {/* Icon and label for about us */}
          <div className="relative z-10 flex items-center gap-2 -bottom-6 capitalize ">
            <DumbbellIcon text={"Manage your account and preferences"} />
          </div>
        </div>

        {/* Editing */}
        <div className="bg-gray-900 text-white">

          <div className="p-6">
            {/* Profile Section */}
            <div className="bg-gray-800 rounded-lg p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">Profile Information</h2>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="flex items-center gap-2 px-4 py-2 bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors"
                >
                  {isEditing ? <X size={16} /> : <Edit3 size={16} />}
                  {isEditing ? "Cancel" : "Edit"}
                </button>
              </div>

              {/* Profile Picture */}
              <div className="flex items-center gap-6 mb-8">
                <div className="relative">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover border-4 border-gray-600"
                  />
                  <label className={`absolute bottom-0 right-0 ${isUploading ? 'bg-gray-500' : 'bg-orange-600 hover:bg-orange-700'} p-2 rounded-full cursor-pointer transition-colors ${isUploading ? 'cursor-not-allowed' : ''}`}>
                    <Camera size={16} />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      disabled={isUploading}
                      className="hidden"
                    />
                  </label>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{userData.name}</h3>
                  <p className="text-gray-400">{userData.email}</p>
                </div>
              </div>

              {/* Profile Form */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First name */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <User size={16} className="inline mr-2" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={isEditing ? editData.name : userData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <Mail size={16} className="inline mr-2" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={isEditing ? editData.email : userData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <Phone size={16} className="inline mr-2" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={isEditing ? editData.phone : userData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Age</label>
                  <input
                    type="number"
                    value={isEditing ? editData.age : userData.age}
                    onChange={(e) => handleInputChange("age", parseInt(e.target.value))}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    value={isEditing ? editData.weight : userData.weight}
                    onChange={(e) => handleInputChange("weight", parseInt(e.target.value))}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Height (cm)
                  </label>
                  <input
                    type="number"
                    value={isEditing ? editData.height : userData.height}
                    onChange={(e) => handleInputChange("height", parseInt(e.target.value))}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Fitness Goal
                  </label>
                  <select
                    value={isEditing ? editData.fitnessGoal : userData.fitnessGoal}
                    onChange={(e) => handleInputChange("fitnessGoal", e.target.value)}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
                  >
                    <option value="Build Muscle">Build Muscle</option>
                    <option value="Lose Weight">Lose Weight</option>
                    <option value="Maintain Weight">Maintain Weight</option>
                    <option value="Improve Endurance">Improve Endurance</option>
                    <option value="General Fitness">General Fitness</option>
                  </select>
                </div>
              </div>

              {isEditing && (
                <div className="flex gap-4 mt-6">
                  <button
                    onClick={handleSave}
                    className="flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors"
                  >
                    <Save size={16} />
                    Save Changes
                  </button>
                </div>
              )}
            </div>

            {/* Security Section */}
            <div className="bg-gray-800 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-white mb-6">Security</h2>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-4 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                  <div className="flex items-center gap-3">
                    <Lock size={20} className="text-orange-500" />
                    <div className="text-left">
                      <p className="text-white font-medium">Change Password</p>
                      <p className="text-gray-400 text-sm">Update your password</p>
                    </div>
                  </div>
                  <div className="text-gray-400">›</div>
                </button>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-red-400 mb-4">Danger Zone</h2>
              <p className="text-gray-300 mb-6">
                Once you delete your account, there is no going back. Please be certain.
              </p>
              <button
                onClick={() => setShowDeleteModal(true)}
                className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
              >
                <Trash2 size={16} />
                Delete Account
              </button>
            </div>
          </div>

          {/* Delete Account Modal */}
          {showDeleteModal && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4">
                <h3 className="text-xl font-semibold text-white mb-4">Delete Account</h3>
                <p className="text-gray-300 mb-6">
                  Are you sure you want to delete your account? This action cannot be undone and all
                  your data will be permanently removed.
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={handleDeleteAccount}
                    className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
                  >
                    Yes, Delete Account
                  </button>
                  <button
                    onClick={() => setShowDeleteModal(false)}
                    className="flex-1 px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
