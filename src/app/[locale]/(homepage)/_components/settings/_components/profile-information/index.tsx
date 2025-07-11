import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

  // Queries
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

    if (data.firstName !== user?.firstName) updatedFields.firstName = data.firstName;
    if (data.lastName !== user?.lastName) updatedFields.lastName = data.lastName;
    if (data.email !== user?.email) updatedFields.email = data.email;
    if (data.age !== user?.age) updatedFields.age = data.age;
    if (data.gender !== user?.gender) updatedFields.gender = data.gender;
    if (data.height !== user?.height) updatedFields.height = data.height;

    if (Object.keys(updatedFields).length > 0) {
      editProfile(updatedFields);
    }

    setIsEditing(false);
  });

  const handleCancel = () => {
    reset();
    setIsEditing(false);
  };

  // Effects
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

  return (
    <div className="border-dark-light-silver-900 dark:border-light-silver-900 border rounded-lg p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        {/* Title */}
        <h2 className="text-xl font-semibold text-dark-gray-800 dark:text-white">
          {t("profile-information")}
        </h2>

        {/* Actions */}
        {!isEditing ? (
          <Button
            onClick={() => setIsEditing(true)}
            className="flex items-center dark:text-dark-gray-900 gap-2 px-4 py-2 bg-flame-orange-600 hover:bg-flame-orange-700 rounded-lg transition-colors"
          >
            <Edit3 size={16} />
            {t("edit")}
          </Button>
        ) : (
          <Button
            onClick={handleCancel}
            className="flex items-center dark:text-dark-gray-900 gap-2 px-4 py-2 bg-light-silver-600 hover:bg-light-silver-700 rounded-lg transition-colors"
          >
            <X size={16} />
            {t("cancel")}
          </Button>
        )}
      </div>

      {/* Profile picture */}
      <div className="flex items-center gap-6 mb-8">
        <div className="relative">
          {/* Image */}
          <img
            src={profileImage || "/default-avatar.png"}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-4 border-soft-light-silver-900"
          />

          {/* Upload image */}
          <label
            className={`absolute bottom-0 right-0 ${isUploading ? "bg-light-silver-500" : "bg-flame-orange-600 hover:bg-flame-orange-700"} p-2 rounded-full cursor-pointer transition-colors ${isUploading ? "cursor-not-allowed" : ""}`}
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
          {/* Full name */}
          <h3 className="text-lg font-semibold text-dark-gray-800 dark:text-white ">
            {user?.firstName} {user?.lastName}
          </h3>

          {/* Email */}
          <p className="text-dark-gray-800 dark:text-white ">{user?.email}</p>
        </div>
      </div>

      {/* Profile form */}
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
                  {t("first-name")}
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    {...field}
                    disabled={!isEditing}
                    className="w-full px-4 py-5 bg-light-silver-300 dark:bg-dark-gray-900 border border-light-silver-900 rounded-lg text-dark-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-flame-orange-500 disabled:opacity-50"
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
                  {t("last-name")}
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    {...field}
                    disabled={!isEditing}
                    className="w-full px-4 py-5 bg-light-silver-300 dark:bg-dark-gray-900 border border-light-silver-900 rounded-lg text-dark-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-custom-o disabled:opacity-50"
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
                  {t("email")}
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    {...field}
                    disabled={!isEditing}
                    className="w-full px-4 py-5 bg-light-silver-300 dark:bg-dark-gray-900 border border-light-silver-900 rounded-lg text-dark-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-custom-o disabled:opacity-50"
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
                <FormLabel>
                  <BsGenderMale size={16} className="inline" />
                  <BsGenderFemale size={16} className="inline mr-2" /> {t("gender")}
                </FormLabel>
                <FormControl>
                  <Select disabled={!isEditing} onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-full px-4 py-5 bg-light-silver-300 dark:bg-dark-gray-900 border border-light-silver-900 rounded-lg text-dark-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-custom-o disabled:opacity-50">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">{t("male")}</SelectItem>
                      <SelectItem value="female">{t("female")}</SelectItem>
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
                <FormLabel>
                  <MdOutlineNumbers size={16} className="inline mr-2" />
                  {t("age")}
                </FormLabel>
                <FormControl>
                  <Select
                    disabled={!isEditing}
                    onValueChange={field.onChange}
                    value={String(field.value)}
                  >
                    <SelectTrigger className="w-full px-4 py-5 bg-light-silver-300 dark:bg-dark-gray-900 border border-light-silver-900 rounded-lg text-dark-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-custom-o disabled:opacity-50">
                      <SelectValue placeholder="Select age" />
                    </SelectTrigger>
                    <SelectContent className="max-h-60 overflow-y-auto">
                      {[...Array(132)].map((_, i) => (
                        <SelectItem key={i + 18} value={String(i + 18)}>
                          {i + 18}
                        </SelectItem>
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
                <FormLabel>
                  <FaPersonArrowUpFromLine size={16} className="inline mr-2" />
                  {t("height")}
                </FormLabel>
                <FormControl>
                  <Select
                    disabled={!isEditing}
                    onValueChange={field.onChange}
                    value={String(field.value)}
                  >
                    <SelectTrigger className="w-full px-4 py-5 bg-light-silver-300 dark:bg-dark-gray-900 border border-light-silver-900 rounded-lg text-dark-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-custom-o disabled:opacity-50">
                      <SelectValue placeholder="Select height" />
                    </SelectTrigger>
                    <SelectContent className="max-h-60 overflow-y-auto">
                      {[...Array(188)].map((_, i) => (
                        <SelectItem key={i + 33} value={String(i + 33)}>
                          {i + 33}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Save button */}
          {isEditing && (
            <div className="md:col-span-2 flex gap-4 mt-6">
              <Button
                type="submit"
                disabled={!isDirty || isEditingProfile}
                className={`flex items-center gap-2 px-6 py-3 dark:text-dark-gray-900 rounded-lg transition-colors ${!isDirty || isEditingProfile ? "bg-light-silver-900 cursor-not-allowed" : "bg-flame-orange-600 hover:bg-flame-orange-700"}`}
              >
                <Save size={16} />
                {isEditingProfile ? t("saving") : t("save-changes")}
              </Button>
            </div>
          )}
        </form>
      </Form>
    </div>
  );
}
