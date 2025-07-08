import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEditProfile } from "@/hooks/auth/use-edit-profile";
import { useGetUserData } from "@/hooks/auth/use-get-user-data";
import { useUploadPhoto } from "@/hooks/auth/use-upload-photo";
import { zodResolver } from "@hookform/resolvers/zod";
import { Camera, Edit3, Mail, Save, User, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import { FaPersonArrowUpFromLine } from "react-icons/fa6";
import { MdOutlineNumbers } from "react-icons/md";
import { useTranslations } from "use-intl";
import { z } from "zod";

export default function ProfileInformation() {
  // Translations
  const t = useTranslations();

  // Query
  const { user } = useGetUserData();

  // Mutation
  const { uploadPhoto, isPending: isUploading } = useUploadPhoto();
  const { editProfile, isPending: isEditingProfile } = useEditProfile();

  // State
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(user?.photo);

  // Validation
  const formSchema = z.object({
    firstName: z.string().nonempty(t("first-name-is-required")),
    lastName: z.string().nonempty(t("last-name-is-required")),
    email: z
      .string()
      .nonempty(t("email-is-required"))
      .email({ message: t("email-is-invalid") }),
    age: z.number().min(1, t("age-is-required")),
    gender: z.string().nonempty(t("gender-is-required")),
    height: z.number().min(1, t("height-is-required")),
  });

  // Form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      email: user?.email || "",
      age: user?.age ?? 0,
      gender: user?.gender || "",
      height: user?.height ?? 0,
    },
  });

  const { isDirty } = form.formState;
  const { reset } = form;

  // Reset form when user data changes
  useEffect(() => {
    if (user) {
      reset({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        age: user.age ?? 0,
        gender: user.gender || "",
        height: user.height ?? 0,
      });
      setProfileImage(user.photo);
    }
  }, [user, reset]);

  // Functions
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Image = (e.target?.result || "") as string;
        setProfileImage(base64Image);
      };
      reader.readAsDataURL(file);
      uploadPhoto({ photo: file });
    }
  };

  const handleSave = form.handleSubmit(async (data) => {
    const updatedFields: Partial<z.infer<typeof formSchema>> = {};

    // Compare each field with the original user data
    if (data.firstName !== user?.firstName) updatedFields.firstName = data.firstName;
    if (data.lastName !== user?.lastName) updatedFields.lastName = data.lastName;
    if (data.email !== user?.email) updatedFields.email = data.email;
    if (data.age !== user?.age) updatedFields.age = data.age;
    if (data.gender !== user?.gender) updatedFields.gender = data.gender;
    if (data.height !== user?.height) updatedFields.height = data.height;

    // Only submit if there are changes
    if (Object.keys(updatedFields).length > 0) {
      editProfile(updatedFields);
    }

    setIsEditing(false);
  });

  const handleCancel = () => {
    reset();
    setIsEditing(false);
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Profile Information</h2>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-2 px-4 py-2 bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors"
          >
            <Edit3 size={16} />
            Edit
          </button>
        ) : (
          <button
            onClick={handleCancel}
            className="flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors"
          >
            <X size={16} />
            Cancel
          </button>
        )}
      </div>

      {/* Profile Picture */}
      <div className="flex items-center gap-6 mb-8">
        <div className="relative">
          <img
            src={profileImage || "/default-avatar.png"}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-4 border-soft-gray-900"
          />
          <label
            className={`absolute bottom-0 right-0 ${isUploading ? "bg-gray-500" : "bg-orange-600 hover:bg-orange-700"} p-2 rounded-full cursor-pointer transition-colors ${isUploading ? "cursor-not-allowed" : ""}`}
          >
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
          <h3 className="text-lg font-semibold text-white">
            {user?.firstName} {user?.lastName}
          </h3>
          <p className="text-gray-400">{user?.email}</p>
        </div>
      </div>

      {/* Profile Form */}
      <Form {...form}>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSave}>
          {/* First name */}
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <User size={16} className="inline mr-2" />
                  First Name
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    {...field}
                    disabled={!isEditing}
                    className="w-full px-4 py-5 bg-dark-gray-900 border border-soft-gray-900 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-flame-orange-500 disabled:opacity-50"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Last name */}
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <User size={16} className="inline mr-2" />
                  Last Name
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    {...field}
                    disabled={!isEditing}
                    className="w-full px-4 py-5 bg-dark-gray-900 border border-soft-gray-900 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-custom-o disabled:opacity-50"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <Mail size={16} className="inline mr-2" />
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    {...field}
                    disabled={!isEditing}
                    className="w-full px-4 py-5 bg-dark-gray-900 border border-soft-gray-900 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-custom-o disabled:opacity-50"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Gender */}
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel><BsGenderMale size={16} className="inline" /><BsGenderFemale size={16} className="inline mr-2" /> Gender</FormLabel>
                <FormControl>
                  <Select
                    disabled={!isEditing}
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <SelectTrigger className="w-full px-4 py-5 bg-dark-gray-900 border border-soft-gray-900 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-custom-o disabled:opacity-50">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Age */}
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel><MdOutlineNumbers size={16} className="inline mr-2" />Age</FormLabel>
                <FormControl>
                  <Select
                    disabled={!isEditing}
                    onValueChange={field.onChange}
                    value={String(field.value)}
                  >
                    <SelectTrigger className="w-full px-4 py-5 bg-dark-gray-900 border border-soft-gray-900 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-custom-o disabled:opacity-50">
                      <SelectValue placeholder="Select age" />
                    </SelectTrigger>
                    <SelectContent className="max-h-60 overflow-y-auto">
                      {[...Array(132)].map((_, i) => (
                        <SelectItem key={i + 18} value={String(i + 18)}>{i + 18}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Height */}
          <FormField
            control={form.control}
            name="height"
            render={({ field }) => (
              <FormItem>
                <FormLabel><FaPersonArrowUpFromLine size={16} className="inline mr-2" />Height (cm)</FormLabel>
                <FormControl>
                  <Select
                    disabled={!isEditing}
                    onValueChange={field.onChange}
                    value={String(field.value)}
                  >
                    <SelectTrigger className="w-full px-4 py-5 bg-dark-gray-900 border border-soft-gray-900 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-custom-o disabled:opacity-50">
                      <SelectValue placeholder="Select height" />
                    </SelectTrigger>
                    <SelectContent className="max-h-60 overflow-y-auto">
                      {[...Array(81)].map((_, i) => (
                        <SelectItem key={i + 140} value={String(i + 140)}>{i + 140}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {isEditing && (
            <div className="md:col-span-2 flex gap-4 mt-6">
              <button
                type="submit"
                disabled={!isDirty || isEditingProfile}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${!isDirty || isEditingProfile ? 'bg-gray-600 cursor-not-allowed' : 'bg-orange-600 hover:bg-orange-700'}`}
              >
                <Save size={16} />
                {isEditingProfile ? "Saving..." : "Save Changes"}
              </button>
            </div>
          )}
        </form>
      </Form>
    </div>
  );
}