import React from 'react';
import PropTypes from 'prop-types';

import LanguageFilter from 'components/language-filter';
import ViewFilter from 'components/view-filter';
import styles from './styles.module.css';
import RankingPeriodFilter from './ranking-period-filter';

const RankingFilters = (props) => (
  <div className={styles.filtersWrap}>
    <div className={styles.filterItem}>
      <LanguageFilter
        selectedLanguage={ props.selectedLanguage }
        updateLanguage={ props.updateLanguage }
      />
    </div>
    <div className={styles.filterItem}>
      <RankingPeriodFilter
        updateDateJump={ props.updateDateJump }
        selectedDateJump={ props.selectedDateJump }
      />
    </div>
    <div className={`${styles.filterItem} d-none d-sm-none d-md-none d-xl-block d-lg-block`}>
      <ViewFilter
        selectedViewType={ props.selectedViewType }
        updateViewType={ props.updateViewType }
      />
    </div>
  </div>
);

RankingFilters.propTypes = {
  updateLanguage: PropTypes.func.isRequired,
  updateViewType: PropTypes.func.isRequired,
  updateDateJump: PropTypes.func.isRequired,
  selectedLanguage: PropTypes.string,
  selectedViewType: PropTypes.string,
  selectedDateJump: PropTypes.string
};

export default RankingFilters;
