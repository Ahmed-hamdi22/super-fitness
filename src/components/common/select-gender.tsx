import { Mars, Venus } from "lucide-react";
import CircularProgress from "./circle-progress";
import { useState } from "react";
import { Button } from "../ui/button";
import { useTranslations } from "use-intl";

export function SelectGender() {
    // Translations
    const t = useTranslations();

    //   State
    const [selectedGender, setSelectedGender] = useState("");

    //   Functions
    const handleSelect = (gender: string) => {
        setSelectedGender(gender);
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 w-full max-w-md">
                <CircularProgress step={1} />

                {/* Title */}
                <div className="text-center mb-8">
                    <h1 className="text-white text-3xl font-bold mb-2">
                        {t("tell-us-about-yourself")}
                    </h1>
                    <p className="text-white text-lg">
                        {t("we-need-to-know-your-gender")}
                    </p>
                </div>
                <div className="flex flex-col items-center space-y-6 p-6 -mt-8">
                    {/* Gender options */}
                    <div className="flex gap-8">
                        <button
                            onClick={() => handleSelect("Male")}
                            className={`flex flex-col items-center justify-center w-24 h-24 rounded-full border-2 text-white ${selectedGender === "Male"
                                    ? "border-blue-500"
                                    : "border-gray-400"
                                } transition`}
                        >
                            <Mars size={32} />
                            <span className="mt-2 font-medium">{t("male")}</span>
                        </button>

                        <button
                            onClick={() => handleSelect("Female")}
                            className={`flex flex-col text-white items-center justify-center w-24 h-24 rounded-full border-2 ${selectedGender === "Female"
                                    ? "border-pink-500"
                                    : "border-gray-400"
                                } transition`}
                        >
                            <Venus size={32} />
                            <span className="mt-2 font-medium">{t("female")}</span>
                        </button>
                    </div>

                    {/* Next Button */}
                    <Button
                        disabled={!selectedGender}
                        className="bg-flame-orange-500 w-full rounded-full text-white block -mt-8 hover:bg-flame-orange-700"
                    >
                        {t("next")}
                    </Button>
                </div>
            </div>
        </div>
    );
}
