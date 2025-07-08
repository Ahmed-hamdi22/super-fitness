import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useGetUserData } from "@/hooks/auth/use-get-user-data";
import { useUploadPhoto } from "@/hooks/auth/use-upload-photo";
import { zodResolver } from "@hookform/resolvers/zod";
import { Camera, Edit3, Mail, Save, User, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslations } from "use-intl";
import { z } from "zod";

export default function ProfileInformation() {
    // Translations
    const t = useTranslations();

    // Query
    const { user, isLoading, refetch } = useGetUserData();

    // Mutation
    const { uploadPhoto, isPending: isUploading } = useUploadPhoto();

    // Status
    const [userData, setUserData] = useState({
        fname: user?.firstName,
        lname: user?.lastName,
        email: user?.email,
        age: user?.age,
        gender: user?.gender,
        weight: user?.weight,
        height: user?.height,
        fitnessGoal: user?.goal,
        activityLevel: user?.activityLevel,
    });
    const [isEditing, setIsEditing] = useState(false);
    const [profileImage, setProfileImage] = useState(user?.photo);
    const [editData, setEditData] = useState(userData);

    console.log("Photo:", user?.firstName);

    // Validation
    const formSchema = z
        .object({
            firstName: z.string().nonempty(t("first-name-is-required")),
            lastName: z.string().nonempty(t("last-name-is-required")),
            email: z
                .string()
                .nonempty(t("email-is-required"))
                .email({ message: t("email-is-invalid") }),
        });

    // Form
    type Inputs = z.infer<typeof formSchema>;
    const form = useForm<Inputs>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
        },
    });

    // Effects
    // useEffect(() => {
    //     if (user?.photo) {
    //       setProfileImage(user.photo);
    //     }
    //   }, [user?.photo]);

    // Functions
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


    const handleInputChange = (field, value) => {
        setEditData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    return (

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
                    <h3 className="text-lg font-semibold text-white">{userData.fname} {userData.lname}</h3>
                    <p className="text-gray-400">{userData.email}</p>
                </div>
            </div>

            {/* Profile Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Form {...form}>
                {/* First name */}
                <FormField
                control={form.control}
                name="firstName"
                    render={({ field }) => (
<FormItem>
    <FormControl>

    </FormControl>
</FormItem>
                )}
                />

                </Form>
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

                {/* <div>
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
                </div> */}

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
    );
}