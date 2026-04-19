const trans = {
  en: {
    greetingMorning: 'Good morning',
    greetingAfternoon: 'Good afternoon',
    greetingEvening: 'Good evening',
    searchPlaceholder: 'Search tabs...',
    openTabsTitle: 'Open tabs',
    domainsMsg: '{0} domain{1}', 
    closeAllTabsBtn: 'Close all {0} tabs',
    closeDupesBtn: 'Close duplicated tabs',
    closeExtrasBtn: 'Close extras',
    youHaveTabOutOpen: 'You have {0} Tab Out tabs open. Keep just this one?',
    windowsDetectedMsg: '{0} windows detected.',
    mergeWindowsBtn: 'Merge all windows',
    closeOtherWindowsBtn: 'Close other windows',
    savedForLaterTitle: 'Saved for later',
    livingInTheMoment: 'Nothing saved. Living in the moment.',
    archiveTitle: 'Archive',
    searchArchivePlaceholder: 'Search archived tabs...',
    openTabsFooterLabel: 'Open tabs',
    homepages: 'Homepages',
    inboxZeroTitle: 'Inbox zero, but for tabs.',
    inboxZeroDesc: "You're free.",
    closeAllDomainTabsBtn: 'Close all {0} tab{1}',
    closeDomainDupesBtn: 'Close {0} duplicate{1}',
    saveForLaterAction: 'Save for later',
    closeTabAction: 'Close this tab',
    dismissAction: 'Dismiss',
    tabClosedToast: 'Tab closed',
    savedForLaterToast: 'Saved for later',
    closedDomainTabsToast: 'Closed {0} tab{1} from {2}',
    closedDupsKeepOneToast: 'Closed duplicates, kept one copy each',
    closedAllTabsFreshToast: 'All tabs closed. Fresh start.',
    mergedWindowsToast: 'Merged {0} tabs into this window',
    closedOtherWindowsToast: 'Closed other windows',
    closedExtraTabOutsToast: 'Closed extra Tab Out tabs',
    noDupFoundToast: 'No duplicated tabs found',
    closedAllDupesToast: 'Closed all duplicated tabs',
    justNow: 'just now',
    minAgo: '{0} min ago',
    hrAgo: '{0} hr{1} ago',
    yesterday: 'yesterday',
    daysAgo: '{0} days ago',
    allAlreadyInThisWindow: 'All tabs are already in this window'
  },
  zh: {
    greetingMorning: '早上好',
    greetingAfternoon: '下午好',
    greetingEvening: '晚上好',
    searchPlaceholder: '搜索标签页...',
    openTabsTitle: '打开的标签页',
    domainsMsg: '{0} 个域名', 
    closeAllTabsBtn: '关闭全部 {0} 标签页',
    closeDupesBtn: '关闭全局重复标签页',
    closeExtrasBtn: '关闭额外页面',
    youHaveTabOutOpen: '您打开了 {0} 个 Tab Out 标签页，仅保留这一个？',
    windowsDetectedMsg: '检测到 {0} 个 Chrome 窗口。',
    mergeWindowsBtn: '合并到当前窗口',
    closeOtherWindowsBtn: '关闭其他窗口',
    savedForLaterTitle: '稍后阅读',
    livingInTheMoment: '没有任何保存的标签页。享受当下。',
    archiveTitle: '归档',
    searchArchivePlaceholder: '搜索归档标签页...',
    openTabsFooterLabel: '打开的标签',
    homepages: '常用主页',
    inboxZeroTitle: '标签页已清空。',
    inboxZeroDesc: "你自由了。",
    closeAllDomainTabsBtn: '关闭 {0} 个标签页',
    closeDomainDupesBtn: '关闭 {0} 个重复标签页',
    saveForLaterAction: '稍后阅读',
    closeTabAction: '关闭标签页',
    dismissAction: '移除',
    tabClosedToast: '标签页已关闭',
    savedForLaterToast: '已保存至稍后阅读',
    closedDomainTabsToast: '已关闭从 {2} 的 {0} 个标签页',
    closedDupsKeepOneToast: '重复标签页已关闭，仅保留一个',
    closedAllTabsFreshToast: '所有标签页已关闭，重新开始。',
    mergedWindowsToast: '已将 {0} 个标签页合并至当前窗口',
    closedOtherWindowsToast: '其他窗口已关闭',
    closedExtraTabOutsToast: '额外的 Tab Out 已关闭',
    noDupFoundToast: '未找到重复的标签页',
    closedAllDupesToast: '已关闭全部全局重复标签页',
    justNow: '刚刚',
    minAgo: '{0} 分钟前',
    hrAgo: '{0} 小时前',
    yesterday: '昨天',
    daysAgo: '{0} 天前',
    allAlreadyInThisWindow: '所有的标签页都已经在这个窗口里了'
  }
};

window.t = function(key, ...args) {
  const lang = localStorage.getItem('tabout_lang') || 'en';
  let str = trans[lang][key] || trans['en'][key] || key;
  args.forEach((val, i) => {
    str = str.replace(`{${i}}`, val);
  });
  return str;
};

// Also apply theme dynamically when this script runs
(function() {
  const theme = localStorage.getItem('tabout_theme') || 'light';
  if (theme === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
  
  // Set initial text for static elements in HTML
  document.addEventListener("DOMContentLoaded", () => {
    const applyStaticTranslations = () => {
      document.querySelector('#tabSearchInput').placeholder = t('searchPlaceholder');
      document.querySelector('.tab-cleanup-text').innerHTML = t('youHaveTabOutOpen', '<strong id="tabOutDupeCount"></strong>');
      document.querySelector('.tab-cleanup-btn').textContent = t('closeExtrasBtn');
      document.querySelector('#deferredColumn h2').textContent = t('savedForLaterTitle');
      document.querySelector('#deferredEmpty').textContent = t('livingInTheMoment');
      document.querySelector('#archiveSearch').placeholder = t('searchArchivePlaceholder');
      document.querySelector('.stat-label').textContent = t('openTabsFooterLabel');
      const archiveToggleBase = document.querySelector('.archive-toggle');
      if (archiveToggleBase) {
        archiveToggleBase.childNodes.forEach(node => {
          if (node.nodeType === Node.TEXT_NODE && node.textContent.trim().length > 0) {
            node.textContent = ' ' + t('archiveTitle') + ' ';
          }
        });
      }
      
      const themeBtn = document.getElementById('themeToggle');
      if (themeBtn) themeBtn.textContent = localStorage.getItem('tabout_theme') === 'dark' ? '☀️' : '🌙';
    };
    
    applyStaticTranslations();

    document.getElementById('themeToggle').addEventListener('click', () => {
      const current = localStorage.getItem('tabout_theme') || 'light';
      const next = current === 'light' ? 'dark' : 'light';
      localStorage.setItem('tabout_theme', next);
      if (next === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
      else document.documentElement.removeAttribute('data-theme');
      document.getElementById('themeToggle').textContent = next === 'dark' ? '☀️' : '🌙';
    });
    
    document.getElementById('langToggle').addEventListener('click', () => {
      const current = localStorage.getItem('tabout_lang') || 'en';
      const next = current === 'en' ? 'zh' : 'en';
      localStorage.setItem('tabout_lang', next);
      location.reload();
    });
  });
})();
