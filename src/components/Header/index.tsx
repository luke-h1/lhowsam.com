'use client';

import * as Dialog from '@frontend/components/Dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Fragment, useState } from 'react';
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
    text: 'Work',
    href: '/work',
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            {...{ className: styles.toggle, type: 'button' }}
          >
            <VisuallyHidden.Root>Open menu</VisuallyHidden.Root>
            <Menu />
          </motion.button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className={styles.panelOverlay} />
          <Dialog.Content
            className={styles.panelContent}
            aria-describedby={undefined}
          >
            <VisuallyHidden.Root>
              <Dialog.Title>Navigation</Dialog.Title>
            </VisuallyHidden.Root>

            <Text fontWeight="bold">Navigation</Text>
            <nav>
              {headerLinks.map((link, index) => (
                <Fragment key={link.href}>
                  <Spacer height="xs" />
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Text
                      color="foregroundNeutral"
                      className={
                        pathname === link.href ? styles.activeLink : ''
                      }
                    >
                      <Link
                        href={link.href}
                        aria-current={
                          pathname === link.href ? 'page' : undefined
                        }
                      >
                        {link.text}
                      </Link>
                    </Text>
                  </motion.div>
                </Fragment>
              ))}
              <CommandMenu />
            </nav>

            <Spacer height="xl" />

            <Dialog.Close asChild>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                {...{ className: styles.panelClose, type: 'button' }}
              >
                <VisuallyHidden.Root>Close menu</VisuallyHidden.Root>
                <X />
              </motion.button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </motion.header>
  );
}
