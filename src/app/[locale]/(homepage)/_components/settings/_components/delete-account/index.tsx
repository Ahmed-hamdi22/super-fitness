import { useDeleteAccount } from '@/hooks/auth/use-delete-account';
import { Trash2 } from 'lucide-react';
import { useTranslations } from 'use-intl';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useNavigate } from 'react-router-dom';

export default function DeleteAccount() {
  // Translations
  const t = useTranslations();

  // Navigation
  const navigate = useNavigate();

  // Mutation
  const { deleteAccount, isPending } = useDeleteAccount();

  // Functions
  const handleDeleteAccount = () => {
    toast.promise(
      new Promise((resolve, reject) => {
        deleteAccount(undefined, {
          onSuccess: () => resolve(true),
          onError: (error) => reject(error),
        });
      }),
      {
        loading: t('deleting-account'),
        success: () => {
          // The actual redirect/logout should be handled in the auth flow
          navigate("/register");
          return t('account-deleted-successfully');
        },
        error: (error) => error.message || t('delete-account-failed'),
      }
    );
  };

  return (
    <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
      <h2 className="text-xl font-semibold text-red-400 mb-4">{t('danger-zone')}</h2>
      <p className="text-gray-300 mb-6">
        {t('delete-account-warning')}
      </p>
      
      <Dialog>
        <DialogTrigger asChild>
          <Button 
            variant="destructive"
            className="flex items-center gap-2"
          >
            <Trash2 size={16} />
            {t('delete-account')}
          </Button>
        </DialogTrigger>
        
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-red-400">{t('delete-account-confirmation-title')}</DialogTitle>
            <DialogDescription className="text-gray-300">
              {t('delete-account-confirmation-description')}
            </DialogDescription>
          </DialogHeader>
          
          <DialogFooter>
            <Button 
              variant="destructive"
              onClick={handleDeleteAccount}
              disabled={isPending}
            >
              {isPending ? t('deleting') : t('yes-delete-account')}
            </Button>
            <Button 
              variant="secondary"
              disabled={isPending}
            >
              {t('cancel')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}