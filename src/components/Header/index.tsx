'use client';

import * as Dialog from '@frontend/components/Dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
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
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Text fontWeight="bold">
          <Link href="/">Luke Howsam</Link>
        </Text>
        <Text color="foregroundNeutral">Software Engineer</Text>
      </div>

      {/* Desktop Navigation */}
      <nav className={styles.navbarDesktop}>
        {headerLinks.map(link => (
          <Text
            color="foregroundNeutral"
            key={link.href}
            className={pathname === link.href ? styles.activeLink : ''}
          >
            <Link
              href={link.href}
              aria-current={pathname === link.href ? 'page' : undefined}
            >
              {link.text}
            </Link>
          </Text>
        ))}
      </nav>

      <div className={styles.connectDesktop}>
        <CommandMenu />
      </div>

      {/* Mobile Navigation */}
      <Dialog.Root open={panelOpen} onOpenChange={setPanelOpen}>
        <Dialog.Trigger asChild>
          <button className={styles.toggle} type="button">
            <VisuallyHidden.Root>Open menu</VisuallyHidden.Root>
            <Menu />
          </button>
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
              {headerLinks.map(link => (
                <Fragment key={link.href}>
                  <Spacer height="xs" />
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
                </Fragment>
              ))}
              <CommandMenu />
            </nav>

            <Spacer height="xl" />

            <Dialog.Close asChild>
              <button className={styles.panelClose} type="button">
                <VisuallyHidden.Root>Close menu</VisuallyHidden.Root>
                <X />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </header>
  );
}
