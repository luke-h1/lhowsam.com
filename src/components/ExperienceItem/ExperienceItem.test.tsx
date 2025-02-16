import companies, { Company } from '@frontend/config/jobs';
import render from '@frontend/test/render';
import toCamelCase from '@frontend/utils/toCamelCase';
import { screen, within } from '@testing-library/react';
import ExperienceItem from '.';

const floow = companies.find(
  company => company.title === 'The Floow',
) as Company;

const hive = companies.find(company => company.title === 'Hive IT') as Company;

const skyBet = companies.find(
  company => company.title === 'Sky Betting & Gaming',
) as Company;

const flutter = companies.find(
  company => company.title === 'Flutter UKI',
) as Company;

describe('ExperienceItem', () => {
  test.each(companies)('should render title for %s', company => {
    const { container } = render(<ExperienceItem company={company} />);
    expect(screen.getByText(company.title)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  describe('Floow', () => {
    test('renders all jobs', () => {
      render(<ExperienceItem company={floow} />);

      const list = screen.getByTestId('ExperienceItem-list-TheFloow');
      const items = within(list).getAllByRole('listitem');

      expect(items).toHaveLength(1);
    });

    test('renders in desc order', () => {
      render(<ExperienceItem company={floow} />);

      const list = screen.getByTestId('ExperienceItem-list-TheFloow');
      const items = within(list).getAllByRole('listitem');

      expect(items[0]).toHaveTextContent('Junior service desk analyst');
    });

    test('renders correct date range', () => {
      render(<ExperienceItem company={floow} />);

      expect(
        screen.getByTestId('TheFloow-Juniorservicedeskanalyst-date-range'),
      ).toHaveTextContent('Jun 2019 — Jul 2020');
    });

    test.each(floow.jobs)('renders description for %s', job => {
      render(<ExperienceItem company={floow} />);

      expect(
        screen.getByTestId(`TheFloow-${toCamelCase(job.title)}-description`),
      ).toHaveTextContent(job.description as string);
    });
  });

  describe('Hive IT', () => {
    test('renders all jobs', () => {
      render(<ExperienceItem company={hive} />);

      const list = screen.getByTestId('ExperienceItem-list-HiveIT');
      const items = within(list).getAllByRole('listitem');

      expect(items).toHaveLength(3);
    });

    test('renders in desc order', () => {
      render(<ExperienceItem company={hive} />);

      const list = screen.getByTestId('ExperienceItem-list-HiveIT');
      const items = within(list).getAllByRole('listitem');

      expect(items[0]).toHaveTextContent('Software Engineer');
      expect(items[1]).toHaveTextContent('Software Tester');
      expect(items[2]).toHaveTextContent('Junior Software Tester');
    });

    test('renders correct dates', () => {
      render(<ExperienceItem company={hive} />);

      const list = screen.getByTestId('ExperienceItem-list-HiveIT');
      const items = within(list).getAllByRole('listitem');

      expect(items[0]).toHaveTextContent('May 2022 — Aug 2023');
      expect(items[1]).toHaveTextContent('May 2021 — May 2022');
      expect(items[2]).toHaveTextContent('Oct 2020 — May 2021');
    });

    test('renders correct date range', () => {
      render(<ExperienceItem company={hive} />);

      expect(
        screen.getByTestId('HiveIT-SoftwareEngineer-date-range'),
      ).toHaveTextContent('May 2022 — Aug 2023');

      expect(
        screen.getByTestId('HiveIT-SoftwareTester-date-range'),
      ).toHaveTextContent('May 2021 — May 2022');

      expect(
        screen.getByTestId('HiveIT-JuniorSoftwareTester-date-range'),
      ).toHaveTextContent('Oct 2020 — May 2021');
    });

    test.each(hive.jobs)('renders description for %s', job => {
      render(<ExperienceItem company={hive} />);

      expect(
        screen.getByTestId(`HiveIT-${toCamelCase(job.title)}-description`),
      ).toHaveTextContent(job.description as string);
    });
  });

  describe('SkyBet', () => {
    test('renders all jobs', () => {
      render(<ExperienceItem company={skyBet} />);

      const list = screen.getByTestId('ExperienceItem-list-SkyBetting&Gaming');
      const items = within(list).getAllByRole('listitem');
      expect(items).toHaveLength(1);

      expect(items[0]).toHaveTextContent('Software Engineer');
    });

    test('renders correct date range', () => {
      render(<ExperienceItem company={skyBet} />);

      const list = screen.getByTestId('ExperienceItem-list-SkyBetting&Gaming');
      const items = within(list).getAllByRole('listitem');

      expect(items[0]).toHaveTextContent('Aug 2023 — Nov 2024');
    });

    test('renders correct date range', () => {
      render(<ExperienceItem company={skyBet} />);

      expect(
        screen.getByTestId('SkyBetting&Gaming-SoftwareEngineer-date-range'),
      ).toHaveTextContent('Aug 2023 — Nov 2024');
    });

    test('renders description', () => {
      render(<ExperienceItem company={skyBet} />);

      expect(
        screen.getByTestId('SkyBetting&Gaming-SoftwareEngineer-description'),
      ).toHaveTextContent(skyBet.jobs[0].description as string);
    });
  });

  describe('Flutter', () => {
    test('renders all jobs', () => {
      render(<ExperienceItem company={flutter} />);
      const list = screen.getByTestId('ExperienceItem-list-FlutterUKI');
      const items = within(list).getAllByRole('listitem');
      expect(items).toHaveLength(1);

      expect(items[0]).toHaveTextContent('Software Developer');
    });

    test('renders correct date range', () => {
      render(<ExperienceItem company={flutter} />);

      const list = screen.getByTestId('ExperienceItem-list-FlutterUKI');
      const items = within(list).getAllByRole('listitem');

      expect(items[0]).toHaveTextContent('Jan 2025 — Now');
    });

    test('renders description', () => {
      render(<ExperienceItem company={flutter} />);

      expect(
        screen.getByTestId('FlutterUKI-SoftwareDeveloper-description'),
      ).toHaveTextContent(flutter.jobs[0].description as string);
    });
  });
});
