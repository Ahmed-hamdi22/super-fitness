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
  DialogClose,
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
          navigate("/register");
          return t('account-deleted-successfully');
        },
        error: (error) => error.message || t('delete-account-failed'),
      }
    );
  };

  return (
    <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
      {/* Title */}
      <h2 className="text-xl font-semibold text-red-400 mb-4">{t('danger-zone')}</h2>

      {/* Warning text */}
      <p className="text-dark-gray-900 dark:text-light-silver-300 mb-6">
        {t('delete-account-warning')}
      </p>
      
      {/* Dialog */}
      <Dialog>
        {/* Dialog trigger */}
        <DialogTrigger asChild>
          {/* Delete button */}
          <Button 
            variant="destructive"
            className="flex items-center gap-2 dark:text-dark-gray-900"
          >
            <Trash2 size={16} />
            {t('delete-account')}
          </Button>
        </DialogTrigger>
        
        {/* Dialog content */}
        <DialogContent className='bg-dark-gray-900 border-none'>
          {/* Dialog header */}
          <DialogHeader className='mb-5'>
            {/* Dialog title */}
            <DialogTitle className="text-red-400">Are you sure you want to delete your account?</DialogTitle>

            {/* Dialog description */}
            <DialogDescription>
            </DialogDescription>
          </DialogHeader>
          
          {/* Dialog footer */}
          <DialogFooter>
            <Button 
              variant="destructive"
              onClick={handleDeleteAccount}
              disabled={isPending}
              className='text-dark-gray-800 dark:text-white'
            >
              {isPending ? t('deleting') : t('yes-delete-account')}
            </Button>
            <DialogClose asChild>
    <Button variant="secondary">
      {t('cancel')}
    </Button>
  </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}