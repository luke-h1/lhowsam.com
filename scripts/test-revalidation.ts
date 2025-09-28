#!/usr/bin/env tsx
/* eslint-disable no-console */

/**
 * Test script for revalidation webhooks
 * Usage: npx tsx scripts/test-revalidation.ts
 */

const BASE_URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';
const SECRET = process.env.SANITY_REVALIDATE_SECRET;

if (!SECRET) {
  console.error('Missing SANITY_REVALIDATE_SECRET environment variable');
  process.exit(1);
}

async function testRevalidation() {
  const testPayloads = [
    {
      _type: 'post',
      _id: 'test-post-id',
      slug: { current: 'test-post' },
      path: '/blog/test-post',
    },
    {
      _type: 'work',
      _id: 'test-work-id',
      slug: { current: 'test-work' },
      path: '/work/test-work',
    },
    {
      _type: 'project',
      _id: 'test-project-id',
      slug: { current: 'test-project' },
      path: '/projects/test-project',
    },
  ];

  // eslint-disable-next-line no-restricted-syntax
  for (const payload of testPayloads) {
    try {
      console.log(`Testing revalidation for ${payload._type}...`);

      // eslint-disable-next-line no-await-in-loop
      const response = await fetch(`${BASE_URL}/api/revalidate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        // eslint-disable-next-line no-await-in-loop
        const result = await response.json();
        console.log(`✅ Success: ${result.message}`);
      } else {
        console.error(`❌ Failed: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.error(`❌ Error: ${error}`);
    }
  }
}

testRevalidation();
