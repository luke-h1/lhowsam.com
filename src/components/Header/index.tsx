'use client';

import * as Dialog from '@frontend/components/Dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'react-feather';
import CommandMenu from '../CommandMenu';
import Link from '../Link';
import Spacer from '../Spacer';
import Text from '../Text';
import * as styles from './Header.css';

interface HeaderLink {
  id: number;
  text: string;
  href: string;
}

const headerLinks: HeaderLink[] = [
  {
    id: 1,
    text: 'Home',
    href: '/',
  },
  {
    id: 2,
    text: 'About',
    href: '/about',
  },
  {
    id: 3,
    text: 'Blog',
    href: '/blog',
  },
  {
    id: 4,
    text: 'Talks',
    href: '/talks',
  },
  {
    id: 5,
    text: 'Projects',
    href: '/projects',
  },
];

export default function Header() {
  const [panelOpen, setPanelOpen] = useState(false);
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{ position: 'relative' }}
      {...{ className: styles.header }}
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Link href="/">
          <div className={styles.logoContainer}>
            <Text fontWeight="bold">Luke Howsam</Text>
            <Text color="foregroundNeutral">Software Engineer</Text>
          </div>
        </Link>
      </motion.div>

      {/* Desktop Navigation */}
      <nav className={styles.navbarDesktop}>
        {headerLinks.map((link, index) => (
          <motion.div
            key={link.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: 0.1 + index * 0.05,
              ease: 'easeOut',
            }}
          >
            <Text
              color="foregroundNeutral"
              className={pathname === link.href ? styles.activeLink : ''}
            >
              <Link
                href={link.href}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.text}
              </Link>
            </Text>
          </motion.div>
        ))}
      </nav>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        {...{ className: styles.connectDesktop }}
      >
        <CommandMenu />
      </motion.div>

      {/* Mobile Navigation */}
      <Dialog.Root open={panelOpen} onOpenChange={setPanelOpen}>
        <Dialog.Trigger asChild>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            {...{ className: styles.toggle, type: 'button' }}
          >
            <VisuallyHidden.Root>Open menu</VisuallyHidden.Root>
            <Menu />
          </motion.button>
        </Dialog.Trigger>
        <AnimatePresence>
          {panelOpen && (
            <Dialog.Portal forceMount>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Dialog.Overlay className={styles.panelOverlay} />
              </motion.div>
              <Dialog.Content
                className={styles.panelContent}
                aria-describedby={undefined}
                asChild
                forceMount
              >
                <motion.div
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <VisuallyHidden.Root>
                    <Dialog.Title>Navigation</Dialog.Title>
                  </VisuallyHidden.Root>

                  <div className={styles.mobileHeader}>
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                    >
                      <Text fontSize="lg" fontWeight="bold">
                        Navigation
                      </Text>
                    </motion.div>

                    <Dialog.Close asChild>
                      <motion.button
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 17,
                        }}
                        {...{ className: styles.panelClose, type: 'button' }}
                      >
                        <VisuallyHidden.Root>Close menu</VisuallyHidden.Root>
                        <X size={24} />
                      </motion.button>
                    </Dialog.Close>
                  </div>

                  <Spacer height="xl" />

                  <nav className={styles.mobileNav}>
                    {headerLinks.map((link, index) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.15 + index * 0.08,
                          duration: 0.4,
                          ease: 'easeOut',
                        }}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        {...{ className: styles.mobileNavItem }}
                      >
                        <Link
                          href={link.href}
                          aria-current={
                            pathname === link.href ? 'page' : undefined
                          }
                          {...{ className: styles.mobileNavLink }}
                        >
                          <Text
                            fontSize="xl"
                            fontWeight={
                              pathname === link.href ? 'bold' : 'normal'
                            }
                            className={
                              pathname === link.href
                                ? styles.activeMobileLink
                                : styles.inactiveMobileLink
                            }
                          >
                            {link.text}
                          </Text>
                        </Link>
                      </motion.div>
                    ))}
                  </nav>

                  <Spacer height="xl" />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    {...{ className: styles.mobileFooter }}
                  >
                    <CommandMenu />
                  </motion.div>
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>
    </motion.header>
  );
}
