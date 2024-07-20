/* eslint-disable no-shadow */
import { useAppDispatch, useAppSelector } from '@frontend/store/hooks';
import { removeToast } from '@frontend/store/reducers/toastReducer';
import * as ToastPrimitive from '@radix-ui/react-toast';
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  LazyMotion,
  domAnimation,
} from 'framer-motion';
import { X } from 'react-feather';
import * as styles from './Toast.css';

export const Toaster = () => {
  const { toasts } = useAppSelector(state => state.toast);
  const dispatch = useAppDispatch();
  const reducedMotion = useReducedMotion();

  return (
    <ToastPrimitive.Provider>
      <LazyMotion features={domAnimation}>
        <AnimatePresence>
          {toasts &&
            toasts.map(toast => (
              <ToastPrimitive.Root
                key={toast.id}
                className={styles.root}
                asChild
                forceMount
                open
                onOpenChange={open => {
                  if (open === false) {
                    // removeToast(toast.id as string);
                    dispatch(removeToast(toast.id as string));
                  }
                }}
                duration={8000}
              >
                <motion.div
                  layout={reducedMotion ? false : 'position'}
                  initial={{ opacity: 0, y: reducedMotion ? 0 : 50 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: reducedMotion ? 1 : 0.75,
                    transition: { duration: 0.2 },
                  }}
                  transition={{
                    ease: 'easeInOut',
                    duration: 0.2,
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 300 }}
                >
                  {toast.title && (
                    <ToastPrimitive.Title className={styles.title}>
                      {toast.title}
                    </ToastPrimitive.Title>
                  )}
                  <ToastPrimitive.Description className={styles.description}>
                    {toast.content}
                  </ToastPrimitive.Description>
                  <ToastPrimitive.Close
                    aria-label="Close"
                    className={styles.close}
                  >
                    <span className={styles.closeHighlight} />
                    <span aria-hidden className={styles.closeIcon}>
                      <X width={16} />
                    </span>
                  </ToastPrimitive.Close>
                </motion.div>
              </ToastPrimitive.Root>
            ))}
        </AnimatePresence>
      </LazyMotion>

      <ToastPrimitive.Viewport className={styles.viewport} />
    </ToastPrimitive.Provider>
  );
};
