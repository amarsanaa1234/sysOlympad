import React from 'react';
import Link from 'next/link';
import Text from 'common/components/Text';
import CopyrightWrapper from './copyrightSection.style';
import data from 'common/data/Agency/';

const CopyrightSection = () => {
  let copyrightText = ` © Sys&CoTech ${data.thisYear}`
  return (
    <CopyrightWrapper className="copyright_section">
      <ul>
        {data.social_profile.map((profile, index) => (
          <li key={`profile_key_${index}`}>
            <Link href="#1">
              <a>
                <i className={profile.icon} />
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <Text content={copyrightText} />
    </CopyrightWrapper>
  );
};

export default CopyrightSection;
