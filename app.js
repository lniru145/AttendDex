const icons = {
  logo: '<svg viewBox="0 0 24 24" fill="none"><path d="M7 3v3M17 3v3M4.5 9h15M6.5 5h11A2.5 2.5 0 0 1 20 7.5v10A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5v-10A2.5 2.5 0 0 1 6.5 5Z" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="m8.5 14 2.2 2.2 4.7-5" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  home: '<svg viewBox="0 0 24 24"><path d="m3.5 10 8.5-7 8.5 7v9a1.5 1.5 0 0 1-1.5 1.5h-14A1.5 1.5 0 0 1 3.5 19v-9Z"/><path d="M9 20.5v-7h6v7"/></svg>',
  classes: '<svg viewBox="0 0 24 24"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21V5.5Z"/><path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20M8 7h8M8 10h6"/></svg>',
  stats: '<svg viewBox="0 0 24 24"><path d="M4 20V11M10 20V5M16 20v-7M22 20V3M2 20.5h21"/></svg>',
  settings: '<svg viewBox="0 0 24 24"><path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"/><path d="m19.4 15 .1.1 1.2.9-1.2 2.1-1.4-.6a7.8 7.8 0 0 1-1.8 1l-.2 1.5h-2.4l-.3-1.5a7.8 7.8 0 0 1-1.8-1l-1.4.6L9 16l1.2-.9a7.7 7.7 0 0 1 0-2.1L9 12l1.2-2.1 1.4.6a7.8 7.8 0 0 1 1.8-1l.3-1.5h2.4l.2 1.5a7.8 7.8 0 0 1 1.8 1l1.4-.6 1.2 2.1-1.2.9a7.7 7.7 0 0 1-.1 2.1Z"/></svg>',
  back: '<svg viewBox="0 0 24 24" fill="none"><path d="m15 18-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none"><path d="m5 12.5 4.5 4.5L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none"><path d="m7 7 10 10M17 7 7 17" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  insight: '<svg viewBox="0 0 24 24" fill="none"><path d="M9 18h6m-5 3h4m-2-19a7 7 0 0 0-4.5 12.4c.7.6 1.2 1.3 1.4 2.1h6.2c.2-.8.7-1.5 1.4-2.1A7 7 0 0 0 12 2Z" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  bell: '<svg viewBox="0 0 24 24" fill="none"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  moon: '<svg viewBox="0 0 24 24" fill="none"><path d="M20.5 15.5A8.5 8.5 0 0 1 8.5 3.5 8.5 8.5 0 1 0 20.5 15.5Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>',
  target: '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="12" r="4.5" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="12" r="1" fill="currentColor"/></svg>',
  export: '<svg viewBox="0 0 24 24" fill="none"><path d="M12 15V3m0 0L8 7m4-4 4 4M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" stroke-width="1.7"/><path d="m4 7 8 6 8-6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  bug: '<svg viewBox="0 0 24 24" fill="none"><path d="M9 8h6a3 3 0 0 1 3 3v6a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4v-6a3 3 0 0 1 3-3ZM9 11H5m14 0h-4M9 15H5m14 0h-4M8 5l2 3m6-3-2 3M7 7 5 5m12 2 2-2M12 12v3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="3.5" stroke="currentColor" stroke-width="1.7"/><path d="M5 20a7 7 0 0 1 14 0" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
  sun: '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.7"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>'
};

const courses = [
  { id:'bio', name:'Cellular Biology', code:'BIO 204', attendance:92, attended:23, total:25, color:'#F0EFE7', ink:'#8B9A6E', days:'Mon · Wed', time:'9:00 AM', room:'Science 214', today:true, todayStatus:'Present' },
  { id:'psych', name:'Cognitive Psychology', code:'PSY 318', attendance:86, attended:18, total:21, color:'#F2EEE5', ink:'#8B9A6E', days:'Mon · Wed', time:'11:30 AM', room:'North Hall 108', today:true, todayStatus:'Upcoming' },
  { id:'stats', name:'Applied Statistics', code:'MAT 220', attendance:78, attended:14, total:18, color:'#EDF0E7', ink:'#8B9A6E', days:'Tue · Thu', time:'1:15 PM', room:'Liberal Arts 302', today:false },
  { id:'design', name:'Design & Society', code:'ART 152', attendance:96, attended:24, total:25, color:'#F4EFE5', ink:'#8B9A6E', days:'Tue · Thu', time:'2:45 PM', room:'Arts Building 12', today:false },
  { id:'writing', name:'Academic Writing', code:'ENG 105', attendance:89, attended:17, total:19, color:'#EFEEE7', ink:'#8B9A6E', days:'Fri', time:'10:00 AM', room:'West Wing 206', today:false }
];

const dateOffset = days => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
};
const sampleReminders = [
  { id:'reading', title:'Read chapter 6', category:'Reminder', due:dateOffset(0), time:'10:30', done:false },
  { id:'problem-set', title:'Finish problem set 04', category:'Homework', due:dateOffset(0), time:'14:00', done:false },
  { id:'lab-report', title:'Submit lab report draft', category:'Assignment', due:dateOffset(0), time:'17:00', done:false },
  { id:'exam-prep', title:'Review midterm flashcards', category:'Reminder', due:dateOffset(1), time:'16:30', done:false }
];
function loadReminders() {
  try {
    const saved = localStorage.getItem('attenddex-reminders');
    return saved ? JSON.parse(saved) : sampleReminders;
  } catch (error) {
    console.error('Could not load saved reminders.', error);
    return sampleReminders;
  }
}
const defaultProfile = { name:'Maya Chen', course:'Psychology', year:'Class of 2026', school:'', semester:'Fall 2025', email:'', photo:'' };
const defaultPreferences = {
  theme:'System', textSize:'Default', target:85, warningThreshold:75, weekStarts:'Monday',
  dateFormat:'MMM d', timeFormat:'12-hour', language:'English',
  notifications:{ classReminders:true, attendanceWarnings:true, lowAttendanceAlerts:true, dailySummary:false },
  workingDays:['Monday','Tuesday','Wednesday','Thursday','Friday'],
  haptics:true, reduceAnimations:false
};
function cloneValue(value) { return JSON.parse(JSON.stringify(value)); }
function loadStored(key, fallback) {
  try {
    const saved=localStorage.getItem(key);
    if(!saved)return cloneValue(fallback);
    const parsed=JSON.parse(saved);
    if(!parsed||typeof parsed!=='object'||Array.isArray(parsed))return cloneValue(fallback);
    const result={...cloneValue(fallback),...parsed};
    if(key==='attenddex-preferences'){
      result.notifications={...fallback.notifications,...(parsed.notifications&&typeof parsed.notifications==='object'?parsed.notifications:{})};
      for(const key of Object.keys(fallback.notifications))if(typeof result.notifications[key]!=='boolean')result.notifications[key]=fallback.notifications[key];
      result.workingDays=Array.isArray(parsed.workingDays)?parsed.workingDays.filter(day=>['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'].includes(day)):cloneValue(fallback.workingDays);
      if(!['System','Light','Dark'].includes(result.theme))result.theme=fallback.theme;
      if(!['Small','Default','Large','Extra Large'].includes(result.textSize))result.textSize=fallback.textSize;
      if(![75,80,85,90,95].includes(Number(result.target)))result.target=fallback.target;
      if(![65,70,75,80,85,90,95].includes(Number.parseInt(result.warningThreshold,10)))result.warningThreshold=fallback.warningThreshold;
      if(!['Monday','Sunday','Saturday'].includes(result.weekStarts))result.weekStarts=fallback.weekStarts;
      if(!['MMM d','d MMM','MM/dd/yyyy'].includes(result.dateFormat))result.dateFormat=fallback.dateFormat;
      if(!['12-hour','24-hour'].includes(result.timeFormat))result.timeFormat=fallback.timeFormat;
      if(result.language!=='English')result.language=fallback.language;
      if(typeof result.haptics!=='boolean')result.haptics=fallback.haptics;
      if(typeof result.reduceAnimations!=='boolean')result.reduceAnimations=fallback.reduceAnimations;
      result.target=Number(result.target);
      result.warningThreshold=Number.parseInt(result.warningThreshold,10);
    }
    if(key==='attenddex-profile'){
      for(const field of Object.keys(fallback))if(typeof result[field]!=='string')result[field]=fallback[field];
      if(result.photo&&!result.photo.startsWith('data:image/'))result.photo='';
    }
    return result;
  } catch(error) {
    console.error(`Could not load ${key}.`,error);
    return cloneValue(fallback);
  }
}
const savedPreferences=loadStored('attenddex-preferences',defaultPreferences);
function hasAuthSession() {
  try {
    return localStorage.getItem('attenddex-auth-session')==='signed-in';
  } catch(error) {
    console.error('Could not read AttendDex sign-in session.',error);
    return false;
  }
}
const state = {
  page:'home', previous:'home', selected:'bio', filter:'All classes', sort:'Name', period:'Week',
  marked:loadStored('attenddex-attendance',{}), importedAttendance:loadStored('attenddex-imported-attendance',{}), target:savedPreferences.target, theme:savedPreferences.theme,
  textSize:savedPreferences.textSize, preferences:savedPreferences,
  profile:loadStored('attenddex-profile',defaultProfile), reminders:loadReminders(),
  showReminderForm:false, confirmAction:'', authenticated:hasAuthSession(), authScreen:'sign-in', authBusy:false
};
const weekdays = ['M','T','W','T','F','S','S'];
const dailyMotivations = [
  'A little plan goes a long way.',
  'Small steps still move you forward.',
  'Show up for the future you’re building.',
  'Progress grows one focused moment at a time.',
  'Start where you are; the next step is enough.',
  'Consistency matters more than perfection.',
  'Every bit of learning adds up.',
  'Make today count in your own way.',
  'Focus on the next thing you can do.',
  'You’re closer than you think.',
  'Give your goals a little time today.',
  'Keep going; steady work adds up.',
  'One task at a time is still momentum.',
  'Believe in the work you’re putting in.'
];
let renderedNavIndex = 0;
let navAnimationFrame = 0;

function icon(name) { return icons[name] || ''; }
function getCourse(id) { return courses.find(course => course.id === id) || courses[0]; }
function getCounts(course) {
  const stored=state.importedAttendance[course.id];
  const base=stored&&Number.isInteger(stored.attended)&&Number.isInteger(stored.total)&&stored.attended>=0&&stored.attended<=stored.total
    ? stored : {attended:course.attended,total:course.total};
  const storedMark=state.marked[course.id];
  const mark=storedMark==='Present'||storedMark==='Absent'?storedMark:'';
  return {
    attended: base.attended + (mark === 'Present' ? 1 : 0),
    total: base.total + (mark ? 1 : 0)
  };
}
function getAttendance(course) {
  const counts = getCounts(course);
  return Math.round((counts.attended / counts.total) * 100);
}
function dailyMotivation(date = new Date()) {
  const dayOfYear = Math.floor((Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 86400000);
  return dailyMotivations[(dayOfYear - 1) % dailyMotivations.length];
}
function persistValue(key,value) {
  try {
    localStorage.setItem(key,JSON.stringify(value));
    return true;
  } catch(error) {
    console.error(`Could not save ${key}.`,error);
    showToast('Could not save this change on your device');
    return false;
  }
}
function savePreferences() {
  state.preferences.target=state.target;
  state.preferences.theme=state.theme;
  state.preferences.textSize=state.textSize;
  return persistValue('attenddex-preferences',state.preferences);
}
function profileInitials(name) {
  return String(name||'').trim().split(/\s+/).filter(Boolean).slice(0,2).map(part=>Array.from(part)[0].toUpperCase()).join('')||'AD';
}
function applyAppearance() {
  const device=document.querySelector('.device');
  const dark=state.theme==='Dark'||(state.theme==='System'&&window.matchMedia?.('(prefers-color-scheme: dark)').matches);
  device?.classList.toggle('dark-theme',Boolean(dark));
  device?.classList.toggle('reduce-motion',Boolean(state.preferences.reduceAnimations));
  device?.setAttribute('data-text-size',state.textSize.toLowerCase().replace(' ','-'));
}
function applyTextSize() {
  const factors={Small:.9,Default:1,Large:1.1,'Extra Large':1.2};
  const factor=factors[state.textSize]||1;
  document.querySelectorAll('#app *').forEach(element=>{
    if(!Array.from(element.childNodes).some(node=>node.nodeType===Node.TEXT_NODE&&node.textContent.trim()))return;
    if(!element.dataset.baseFontSize)element.dataset.baseFontSize=getComputedStyle(element).fontSize;
    const base=parseFloat(element.dataset.baseFontSize);
    if(Number.isFinite(base))element.style.fontSize=`${base*factor}px`;
  });
}
function header() {
  const name=state.profile.name||'Student';
  return `<div class="topbar"><img class="brand-logo" src="assets/attenddex-wordmark.png" alt="AttendDex" width="817" height="142"><div class="avatar" aria-label="${escapeHtml(name)}">${profileAvatarContent(state.profile)}</div></div>`;
}
function profileAvatarContent(profile) {
  return profile.photo
    ? `<img class="profile-photo-image" src="${escapeHtml(profile.photo)}" alt="">`
    : escapeHtml(profile.initials||profileInitials(profile.name));
}
function tabbar() {
  const tabs = [['home','Home'],['stats','Analytics'],['settings','Settings']];
  const activeTab = ['classes','detail','mark'].includes(state.page)?'stats':['profile','theme','text-size','schedule','about','privacy','terms'].includes(state.page)?'settings':state.page;
  return `<nav class="bottom-nav" aria-label="Main navigation" role="tablist"><span class="nav-indicator" aria-hidden="true"></span>${tabs.map(([id,label])=>`<button class="nav-item ${id===activeTab?'active':''}" data-page="${id}" aria-label="${label}" aria-selected="${id===activeTab}" role="tab" type="button"><span class="nav-icon">${icon(id)}</span><span class="nav-label">${label}</span></button>`).join('')}</nav>`;
}
function authView() {
  const signup=state.authScreen==='sign-up';
  const forgot=state.authScreen==='forgot';
  const title=forgot?'Forgot password?':signup?'Create your account':'Welcome back';
  const subtitle=forgot
    ?'Password recovery isn’t available for local accounts yet.'
    :signup?'A little more organized starts here.':'Sign in to continue to your day.';
  const eyeIcon='<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M2.5 12s3.4-6 9.5-6 9.5 6 9.5 6-3.4 6-9.5 6-9.5-6-9.5-6Z" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="12" r="2.6" stroke="currentColor" stroke-width="1.7"/></svg>';
  return `<section class="auth-screen"><div class="auth-content"><div class="auth-brand"><img src="assets/attenddex-wordmark.png" alt="AttendDex"></div><div class="auth-intro"><span class="auth-eyebrow">${forgot?'ACCOUNT ACCESS':'YOUR DAY, IN GOOD HANDS'}</span><h1>${title}</h1><p>${subtitle}</p></div>
    ${forgot?`<div class="auth-message" role="status"><span class="auth-message-icon">${icon('insight')}</span><p>Accounts are stored only on this device. Since no email service is connected, AttendDex can’t reset your password. Your planner data stays on this device; return to sign in and try your password again.</p></div><button class="auth-primary" type="button" data-auth-screen="sign-in">Back to sign in</button>`:
    `<form class="auth-form" id="${signup?'auth-signup-form':'auth-signin-form'}" novalidate>${signup?`<label class="auth-label" for="auth-name">Name</label><input class="auth-input" id="auth-name" name="name" type="text" autocomplete="name" placeholder="Your name" maxlength="60" required>`:''}
      <label class="auth-label" for="auth-identifier">Email or username</label><input class="auth-input" id="auth-identifier" name="identifier" type="text" inputmode="email" autocomplete="${signup?'username':'username'}" autocapitalize="none" spellcheck="false" placeholder="you@example.com" maxlength="120" required>
      <label class="auth-label" for="auth-password">Password</label><div class="auth-password-wrap"><input class="auth-input" id="auth-password" name="password" type="password" autocomplete="${signup?'new-password':'current-password'}" placeholder="${signup?'At least 8 characters':'Enter your password'}" minlength="${signup?'8':'1'}" required><button class="auth-password-toggle" type="button" data-toggle-auth-password aria-label="Show password" aria-pressed="false">${eyeIcon}</button></div>
      ${signup?`<label class="auth-label" for="auth-confirm-password">Confirm password</label><div class="auth-password-wrap"><input class="auth-input" id="auth-confirm-password" name="confirmPassword" type="password" autocomplete="new-password" placeholder="Enter your password again" minlength="8" required><button class="auth-password-toggle" type="button" data-toggle-auth-password aria-label="Show password" aria-pressed="false">${eyeIcon}</button></div>`:`<div class="auth-forgot-row"><button class="auth-text-action" type="button" data-auth-screen="forgot">Forgot password?</button></div>`}
      <p class="auth-error" id="auth-error" role="alert" aria-live="polite"></p><button class="auth-primary" type="submit" ${state.authBusy?'disabled':''}>${state.authBusy?'Please wait…':signup?'Create account':'Sign In'}</button>
      </form><p class="auth-switch">${signup?'Already have an account?':'New to AttendDex?'} <button class="auth-text-action" type="button" data-auth-screen="${signup?'sign-in':'sign-up'}">${signup?'Sign In':'Create account'}</button></p>${signup?'<p class="auth-local-note">This prototype saves your account on this device only. Your password is stored as a salted hash.</p>':''}`}
    </div><p class="auth-footer">Your plans, just for you.</p></section>`;
}
function courseStatus(course) {
  return state.marked[course.id] || course.todayStatus || 'Upcoming';
}
function courseCard(course, compact=false) {
  const status = courseStatus(course);
  return `<div class="class-card" data-course="${course.id}">
    <span class="class-stripe" style="background:${course.ink}"></span>
    <div class="class-main"><p class="class-name">${course.name}</p><div class="class-meta"><span>${course.time}</span><i class="dot"></i><span>${course.room}</span></div></div>
    <span class="status-chip ${status==='Upcoming'?'upcoming':''}">${status}</span>
  </div>`;
}
function homeView() {
  const today = dateOffset(0);
  const todaysReminders = state.reminders.filter(reminder => reminder.due === today);
  const completed = todaysReminders.filter(reminder => reminder.done).length;
  const upcoming = state.reminders.filter(reminder => reminder.due > today).sort((a,b) => `${a.due}${a.time}`.localeCompare(`${b.due}${b.time}`));
  const dateOptions={'d MMM':{day:'numeric',month:'short'},'MM/dd/yyyy':{month:'2-digit',day:'2-digit',year:'numeric'}};
  const dateLabel = state.preferences.dateFormat==='MMM d'
    ? new Intl.DateTimeFormat('en',{weekday:'long',month:'long',day:'numeric'}).format(new Date())
    : new Intl.DateTimeFormat('en',{weekday:'long',...(dateOptions[state.preferences.dateFormat]||dateOptions['d MMM'])}).format(new Date());
  return `<div class="view-scroll">
    ${header()}
    <div class="planner-intro"><div><p class="planner-date">${dateLabel}</p><h1 class="page-title">Good to see you, ${escapeHtml(state.profile.name||'Student')} 😊</h1><p class="page-subtitle">${dailyMotivation()}</p></div></div>
    <section class="focus-card"><div><span class="focus-eyebrow">YOUR DAY, AT A GLANCE</span><div class="focus-title">${todaysReminders.length ? `${todaysReminders.length} things on your list` : 'A little breathing room'}</div><span class="focus-subtitle">${todaysReminders.length ? `${completed} of ${todaysReminders.length} done · one thing at a time` : 'Add a reminder whenever you need one.'}</span></div><div class="focus-ring" style="--progress:${todaysReminders.length ? completed / todaysReminders.length * 100 : 0}%"><span>${todaysReminders.length ? completed : '·'}</span></div></section>
    <div class="section-heading reminder-heading"><div><h2>Today</h2><span class="section-caption">${todaysReminders.length ? 'Your priorities, at your pace' : 'Nothing scheduled. Enjoy the space.'}</span></div></div>
    <div class="reminder-list">${todaysReminders.length ? todaysReminders.sort((a,b)=>a.time.localeCompare(b.time)).map(reminderRow).join('') : `<button class="empty-reminders" data-add-reminder><span class="empty-plus">+</span><span><strong>Nothing on the list just yet</strong><small>Add homework, exam prep or anything you want to remember.</small></span></button>`}</div>
    ${upcoming.length ? `<div class="section-heading reminder-heading upcoming-heading"><div><h2>Coming up</h2><span class="section-caption">A soft look at what’s ahead</span></div></div><div class="reminder-list">${upcoming.map(reminderRow).join('')}</div>` : ''}
  </div>${tabbar()}<button class="home-fab" data-add-reminder aria-label="Add a reminder">+</button>`;
}
function reminderRow(reminder) {
  const date = formatReminderDate(reminder.due);
  const time = formatReminderTime(reminder.time);
  return `<article class="reminder-row ${reminder.done?'is-done':''}"><button class="reminder-check" data-toggle-reminder="${reminder.id}" aria-label="${reminder.done?'Mark incomplete':'Mark complete'}" aria-pressed="${reminder.done}">${reminder.done?icon('check'):''}</button><div class="reminder-content"><strong>${escapeHtml(reminder.title)}</strong><div class="reminder-meta"><span>${escapeHtml(reminder.category)}</span><i></i><span>${date} · ${time}</span></div></div><button class="reminder-delete" data-delete-reminder="${reminder.id}" aria-label="Delete ${escapeHtml(reminder.title)}">×</button></article>`;
}
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}
function reminderForm() {
  const types=[
    ['Homework','<path d="M5 4.75A1.75 1.75 0 0 1 6.75 3H20v16H6.75A2.75 2.75 0 0 0 4 21V5.75A1 1 0 0 1 5 4.75Z"/><path d="M8 7h8M8 10h7"/>'],
    ['Assignment','<path d="M8 4.5h8M9 3h6v3H9zM7 4.5H5v17h14v-17h-2"/><path d="m8.5 13 2 2 5-5"/>'],
    ['Reminder','<path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4"/>']
  ];
  return `<div class="sheet-backdrop reminder-backdrop" data-close-sheet><section class="reminder-sheet" role="dialog" aria-modal="true" aria-labelledby="reminder-sheet-title"><div class="sheet-handle"></div><div class="sheet-heading"><div><h2 id="reminder-sheet-title">Add a reminder</h2><p>Make a note of what matters today.</p></div><button class="sheet-close" type="button" data-close-sheet aria-label="Close reminder form">×</button></div><form id="reminder-form"><div class="reminder-fields">
    <div class="reminder-field-group"><label class="field-label" for="reminder-title">What do you need to remember?</label><input id="reminder-title" name="title" class="reminder-input reminder-title-input" maxlength="80" placeholder="e.g. Prepare for biology midterm" required autocomplete="off"><div class="reminder-field-hint">A clear title makes it easier to pick up later.</div></div>
    <fieldset class="reminder-field-group reminder-type-field"><legend class="field-label">Type</legend><div class="reminder-type-options">${types.map(([type,path],index)=>`<button class="reminder-type-option ${index===0?'selected':''}" type="button" data-reminder-type="${type}" aria-pressed="${index===0?'true':'false'}"><svg viewBox="0 0 24 24" aria-hidden="true">${path}</svg><span>${type}</span></button>`).join('')}</div><input id="reminder-category" type="hidden" name="category" value="Homework"></fieldset>
    <div class="reminder-field-group"><div class="field-pair reminder-date-time"><div class="reminder-card-field"><label class="field-label" for="reminder-date"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5" width="17" height="16" rx="2.5"/><path d="M7.5 3v4m9-4v4m-13 3h17"/></svg>Date</label><input class="reminder-input" id="reminder-date" name="due" type="date" value="${dateOffset(0)}" required></div><div class="reminder-card-field"><label class="field-label" for="reminder-time"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3.5 2"/></svg>Time</label><input class="reminder-input" id="reminder-time" name="time" type="time" value="15:00"></div></div></div>
    <div class="reminder-field-group"><label class="field-label" for="reminder-subject">Subject <span class="reminder-optional">Optional</span></label><div class="reminder-subject-wrap"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21V5.5Z"/><path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20M8 7h8"/></svg><select id="reminder-subject" name="subject" class="reminder-input"><option value="">No subject</option>${courses.map(course=>`<option value="${course.id}">${escapeHtml(course.name)}</option>`).join('')}</select><span class="reminder-select-chevron">⌄</span></div></div>
    <div class="reminder-field-group"><label class="field-label" for="reminder-notes">Notes <span class="reminder-optional">Optional</span></label><textarea id="reminder-notes" name="notes" class="reminder-input reminder-notes-input" maxlength="500" placeholder="Add a little more detail…"></textarea></div>
    </div><div class="reminder-form-footer"><button class="primary-button save-reminder" type="submit" disabled>Save reminder</button></div></form></section></div>`;
}
function filteredCourses() {
  let list = [...courses];
  if(state.filter==='On track') list=list.filter(c=>getAttendance(c)>=state.target);
  if(state.filter==='Needs attention') list=list.filter(c=>getAttendance(c)<state.target);
  if(state.sort==='Attendance') list.sort((a,b)=>getAttendance(b)-getAttendance(a));
  else list.sort((a,b)=>a.name.localeCompare(b.name));
  return list;
}
function classesView() {
  return `<div class="view-scroll">${header()}<h1 class="page-title">Attendance</h1><p class="page-subtitle">A clear view of how you’re showing up.</p>
    <div class="filter-row">${['All classes','On track','Needs attention'].map(f=>`<button class="filter-chip ${state.filter===f?'active':''}" data-filter="${f}">${f}</button>`).join('')}<button class="sort-button" data-sort>↕ ${state.sort}</button></div>
    <div class="subject-list">${filteredCourses().map(c=>subjectRow(c)).join('')}</div>
    <div style="margin-top:17px;padding:12px 13px;background:#F0EFE7;border-radius:14px;color:#62675A;font-size:10px;line-height:1.5">Your semester target is <strong style="color:#65744C">${state.target}%</strong>. ${courses.filter(c=>getAttendance(c)<state.target).length ? 'A couple of classes could use a little extra care.' : 'You’re meeting your target in every class.'}</div>
  </div>${tabbar()}`;
}
function subjectRow(c) {
  const pct=getAttendance(c), atRisk=pct<state.target, counts=getCounts(c);
  return `<div class="subject-row" data-course="${c.id}"><div class="subject-top"><div class="subject-ident"><div class="subject-icon" style="background:${c.color};color:${c.ink}">${c.code.slice(0,3)}</div><div style="min-width:0"><div class="subject-name">${c.name}</div><div class="subject-code">${c.code} · ${counts.attended} of ${counts.total} classes</div></div></div><span class="subject-pct">${pct}%</span></div><div class="progress-track"><div class="progress-fill" style="width:${pct}%;background:${atRisk?'#9A8150':c.ink}"></div></div><div class="progress-foot"><span>${c.days}</span><span class="${atRisk?'risk':'healthy'}">${atRisk?'Below target':'On track'}</span></div></div>`;
}
function lineChart(c) {
  const values=c.id==='stats'?[73,82,76,91,78,86,92,88,95]:c.id==='psych'?[79,84,75,90,86,83,91,86,89]:[81,78,89,84,93,88,86,94,92];
  const pts=values.map((v,i)=>`${8+i*(284/(values.length-1))},${90-(v-70)*2.1}`).join(' ');
  const area=`8,94 ${pts} 292,94`;
  return `<svg class="line-chart" viewBox="0 0 300 105" preserveAspectRatio="none" aria-label="Attendance trend chart"><line x1="8" y1="24" x2="292" y2="24" stroke="#E3E1D8"/><line x1="8" y1="58" x2="292" y2="58" stroke="#E3E1D8"/><line x1="8" y1="92" x2="292" y2="92" stroke="#E3E1D8"/><polygon points="${area}" fill="rgba(139,154,110,.10)"/><polyline points="${pts}" fill="none" stroke="#8B9A6E" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="292" cy="${90-(values.at(-1)-70)*2.1}" r="4" fill="#FFFEFA" stroke="#8B9A6E" stroke-width="2"/></svg>`;
}
function detailView() {
  const c=getCourse(state.selected), pct=getAttendance(c), counts=getCounts(c);
  const miss=Math.max(0,Math.floor((counts.attended/(state.target/100))-counts.total));
  return `<div class="view-scroll">
    <div class="detail-topbar"><button class="back-button" data-back>${icon('back')} Classes</button><button class="icon-button" data-toast="Subject options"><span style="font-size:19px;line-height:1">···</span></button></div>
    <div class="subject-ident" style="margin-bottom:17px"><div class="subject-icon" style="width:42px;height:42px;border-radius:14px;background:${c.color};color:${c.ink}">${c.code.slice(0,3)}</div><div><div class="subject-name" style="font-size:14px">${c.name}</div><div class="subject-code">${c.code} · ${c.days}</div></div></div>
    <div class="detail-label">Attendance this semester</div><div class="detail-percentage">${pct}%</div><div class="detail-summary">You’re ${pct>=state.target?'above':'below'} your ${state.target}% target</div>
    <div class="detail-stats"><div class="stat-tile"><strong>${counts.attended}</strong><span>Attended</span></div><div class="stat-tile"><strong>${counts.total-counts.attended}</strong><span>Missed</span></div><div class="stat-tile"><strong>${counts.total}</strong><span>Total classes</span></div></div>
    <div class="chart-card"><div class="chart-head"><strong>Attendance history</strong><div class="chart-legend"><span><i class="legend-mark"></i>This term</span><span><i class="legend-mark muted"></i>Target</span></div></div>${lineChart(c)}<div class="chart-labels"><span>Sep 2</span><span>Sep 16</span><span>Oct 1</span><span>Oct 10</span></div></div>
    <div class="insight-card"><span class="insight-icon">${icon('insight')}</span><div class="insight-copy">${miss>0?`You can miss <strong>${miss} more ${miss===1?'class':'classes'}</strong> and still meet your ${state.target}% goal.`:'You’re right at your target. Attend the next class to stay on track.'}</div></div>
    <div class="target-row"><div class="target-copy"><strong>Attendance goal</strong><span>Personalize your target for this class</span></div><select class="target-select" aria-label="Attendance target">${[75,80,85,90,95].map(x=>`<option ${state.target===x?'selected':''}>${x}%</option>`).join('')}</select></div>
    <button class="primary-button" style="margin-top:8px" data-mark>${icon('check')}Mark today’s attendance</button>
  </div>`;
}
function markView() {
  const c=getCourse(state.selected), marked=state.marked[c.id];
  return `<div class="view-scroll">
    <div class="detail-topbar"><button class="back-button" data-back>${icon('back')} Back</button><span style="width:38px"></span></div>
    <div style="text-align:center;margin-top:29px"><div class="brand-mark" style="width:48px;height:48px;border-radius:16px;margin:0 auto 16px">${icon('logo')}</div><h1 class="page-title" style="font-size:24px">Mark attendance</h1><p class="page-subtitle">A quick check-in, and you’re all set.</p></div>
    <div class="attendance-card">
      <h2 class="attendance-title">Did you attend this class?</h2><p class="attendance-subtitle">Today · Monday, October 10</p>
      <div class="attendance-subject"><span>${c.name}</span><strong>${c.time}</strong></div>
      <div class="attendance-actions"><button class="attendance-action present" data-attendance="Present"><span class="action-orb">${icon('check')}</span><strong>Present</strong><small>Count me in</small></button><button class="attendance-action absent" data-attendance="Absent"><span class="action-orb">${icon('close')}</span><strong>Absent</strong><small>I missed this one</small></button></div>
      <div class="confirmation ${marked?'visible':''} ${marked==='Present'?'success':'warning'}">${marked==='Present'?'You’re marked present. Nice work keeping your record current.':marked==='Absent'?'Marked absent. Your attendance percentage has been updated.':''}</div>
    </div>
    <p class="attendance-note">You can change this later from your class history.</p>
  </div>`;
}
function statsView() {
  const monthly=state.period==='Month';
  const labels=monthly?['Sep 1','Sep 8','Sep 15','Sep 22','Sep 29']:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  const heights=monthly?[70,82,62,94,77]:[83,70,91,65,88,36,22];
  const overall=Math.round(courses.reduce((s,c)=>s+getCounts(c).attended,0)/courses.reduce((s,c)=>s+getCounts(c).total,0)*100);
  return `<div class="view-scroll">${header()}<div style="display:flex;align-items:flex-start;justify-content:space-between"><div><h1 class="page-title">Analytics</h1><p class="page-subtitle">Your attendance, in perspective.</p></div><div class="period-toggle">${['Week','Month'].map(p=>`<button class="period-button ${state.period===p?'active':''}" data-period="${p}">${p}</button>`).join('')}</div></div>
    <div class="metric-row"><div><div class="metric-value">${overall}%</div><div class="metric-caption">Average attendance ${monthly?'this month':'this week'}</div></div><span class="metric-delta">↗ 2.4% vs last ${monthly?'month':'week'}</span></div>
    <div class="chart-card"><div class="chart-head"><strong>Attendance trend</strong><span style="font-size:9px;color:#9298a6">Target ${state.target}%</span></div>
      <div class="bar-chart">${heights.map((h,i)=>`<div class="bar-group"><span class="bar ${i===heights.indexOf(Math.max(...heights))?'primary':''}" style="height:${h}%"></span></div>`).join('')}</div><div class="bar-labels">${labels.map(l=>`<span>${l}</span>`).join('')}</div>
    </div>
    <div class="section-heading"><h2>By subject</h2><button class="section-link" data-page="classes">View subjects</button></div>
    <div class="chart-card"><div class="comparison-list">${[...courses].sort((a,b)=>getAttendance(b)-getAttendance(a)).map(c=>`<div class="comparison-item"><span class="comparison-name">${c.name}</span><span class="comparison-value">${getAttendance(c)}%</span><div class="comparison-track"><div class="comparison-fill" style="width:${getAttendance(c)}%;background:#8B9A6E"></div></div></div>`).join('')}</div></div>
    <div class="insight-card" style="margin-top:14px"><span class="insight-icon">${icon('insight')}</span><div class="insight-copy"><strong>Nice momentum.</strong> Your attendance is trending up. Keep showing up and you’ll finish the term strong.</div></div>
  </div>${tabbar()}`;
}
function settingRow(symbol,label,detail,right,attrs='') {
  const interactive=/data-(route|settings-route|export|import|confirm|feedback)/.test(attrs);
  return `<div class="setting-row ${interactive?'export-row':''}" ${interactive?'role="button" tabindex="0"':''} ${attrs}><div class="setting-left"><span class="setting-icon">${icon(symbol)}</span><span><span class="setting-label">${label}</span>${detail?`<span class="setting-detail">${detail}</span>`:''}</span></div><span class="setting-right">${right}</span></div>`;
}
function emailSettingRow(symbol,label,detail,mailto) {
  return `<a class="setting-row export-row email-setting-row" href="${mailto}"><span class="setting-left"><span class="setting-icon">${icon(symbol)}</span><span><span class="setting-label">${label}</span><span class="setting-detail">${detail}</span></span></span><span class="setting-right"><span class="chevron">›</span></span></a>`;
}
function settingsSection(title,rows) {
  return `<section class="settings-group"><h2 class="settings-group-title">${title}</h2><div class="settings-card">${rows}</div></section>`;
}
function preferenceSelect(label,key,value,options) {
  return `<label class="setting-row"><span class="setting-left"><span class="setting-label">${label}</span></span><select class="settings-select" data-pref="${key}" aria-label="${label}">${options.map(option=>`<option ${option===value?'selected':''}>${option}</option>`).join('')}</select></label>`;
}
function preferenceSwitch(symbol,label,detail,key) {
  const checked=key.split('.').reduce((value,part)=>value?.[part],state.preferences);
  return settingRow(symbol,label,detail,`<button class="switch ${checked?'on':''}" data-pref-toggle="${key}" aria-label="Toggle ${label}" aria-pressed="${Boolean(checked)}" type="button"></button>`);
}
function profileView() {
  const profile=state.profile;
  return `<div class="view-scroll">${subscreenHeader('Profile')}<form id="profile-form" class="settings-form">
    <div class="profile-preview"><div class="profile-photo-controls"><button class="profile-avatar profile-avatar-large photo-picker-button" id="profile-preview-avatar" type="button" data-change-photo aria-label="Choose profile photo">${profileAvatarContent(profile)}</button><div class="photo-actions"><button class="photo-action" type="button" data-change-photo>Change photo</button>${profile.photo?'<button class="photo-action remove-photo" type="button" data-remove-photo>Remove photo</button>':''}</div></div><div><strong id="profile-preview-name">${escapeHtml(profile.name)}</strong><span>Your AttendDex profile</span></div><input id="profile-photo-file" class="visually-hidden-file" type="file" accept="image/*" aria-label="Choose a profile photo"></div>
    <label class="field-label" for="profile-name">Name</label><input class="reminder-input" id="profile-name" name="name" value="${escapeHtml(profile.name)}" maxlength="60" autocomplete="name" required>
    <label class="field-label" for="profile-initials">Profile initials</label><input class="reminder-input" id="profile-initials" name="initials" value="${escapeHtml(profile.initials||profileInitials(profile.name))}" maxlength="3" autocomplete="off">
    <label class="field-label" for="profile-course">Course / stream</label><input class="reminder-input" id="profile-course" name="course" value="${escapeHtml(profile.course)}" maxlength="60">
    <label class="field-label" for="profile-year">Class / year</label><input class="reminder-input" id="profile-year" name="year" value="${escapeHtml(profile.year)}" maxlength="40">
    <label class="field-label" for="profile-school">College / school</label><input class="reminder-input" id="profile-school" name="school" value="${escapeHtml(profile.school)}" maxlength="80">
    <label class="field-label" for="profile-semester">Semester</label><input class="reminder-input" id="profile-semester" name="semester" value="${escapeHtml(profile.semester)}" maxlength="40">
    <label class="field-label" for="profile-email">Email <span class="optional-label">Optional</span></label><input class="reminder-input" id="profile-email" name="email" type="email" value="${escapeHtml(profile.email)}" maxlength="120" autocomplete="email">
    <button class="primary-button" type="submit">Save profile</button>
  </form></div>${tabbar()}`;
}
function subscreenHeader(title) {
  return `${header()}<div class="settings-subhead"><button class="back-button" data-settings-back>${icon('back')} Settings</button><h1 class="page-title">${title}</h1></div>`;
}
function optionCard(title,description,options,current,attribute) {
  return `<div class="settings-card option-card">${options.map(option=>`<button class="option-row ${option===current?'selected':''}" ${attribute}="${escapeHtml(option)}" type="button"><span><strong>${escapeHtml(option)}</strong>${description?`<small>${escapeHtml(description[option]||'')}</small>`:''}</span><span class="option-radio">${option===current?icon('check'):''}</span></button>`).join('')}</div>`;
}
function settingsView() {
  const fullName=state.profile.name||'Student';
  const profileDetail=[state.profile.course,state.profile.year].filter(Boolean).join(' · ')||'Add your study details';
  return `<div class="view-scroll">${header()}<h1 class="page-title">Settings</h1><p class="page-subtitle">Make AttendDex feel like yours.</p>
    <section class="settings-group"><h2 class="settings-group-title">Profile</h2><button class="settings-profile profile-link" data-settings-route="profile" type="button"><span class="profile-avatar">${profileAvatarContent(state.profile)}</span><span class="profile-info"><strong>${escapeHtml(fullName)}</strong><span>${escapeHtml(profileDetail)}</span></span><span class="chevron">›</span></button></section>
    ${settingsSection('Preferences',`${settingRow('target','Attendance target','Your semester goal',`<select class="target-select global-target" data-target-setting aria-label="Semester attendance target">${[75,80,85,90,95].map(x=>`<option value="${x}" ${state.target===x?'selected':''}>${x}%</option>`).join('')}</select>`)}${preferenceSwitch('bell','Class reminders','A nudge before class','notifications.classReminders')}${settingRow('sun','Theme','Choose your appearance',`${escapeHtml(state.theme)} <span class="chevron">›</span>`,'data-settings-route="theme"')}${settingRow('user','Text size','Adjust reading size',`${escapeHtml(state.textSize)} <span class="chevron">›</span>`,'data-settings-route="text-size"')}`)}
    ${settingsSection('Notifications',`${preferenceSwitch('bell','Class reminders','A nudge before class','notifications.classReminders')}${preferenceSwitch('target','Attendance warnings','When you approach your target','notifications.attendanceWarnings')}${preferenceSwitch('insight','Low attendance alerts','When a class falls below target','notifications.lowAttendanceAlerts')}${preferenceSwitch('sun','Daily summary','A quick end-of-day recap','notifications.dailySummary')}`)}
    ${settingsSection('Attendance',`${settingRow('target','Attendance target','Minimum goal for each class',`<select class="target-select global-target" data-target-setting aria-label="Attendance target">${[75,80,85,90,95].map(x=>`<option value="${x}" ${state.target===x?'selected':''}>${x}%</option>`).join('')}</select>`)}${preferenceSelect('Warning threshold','warningThreshold',`${state.preferences.warningThreshold}%`,[65,70,75,80,85,90,95].map(value=>`${value}%`))}${settingRow('classes','Working days','Set your usual class days',`${state.preferences.workingDays.length} days <span class="chevron">›</span>`,'data-settings-route="schedule"')}`)}
    ${settingsSection('Data & Privacy',`${settingRow('export','Export attendance','Download a CSV backup','<span class="chevron">›</span>','data-export')}${settingRow('user','Import attendance','Restore an attendance CSV or JSON file','<span class="chevron">›</span>','data-import')}${settingRow('insight','Privacy & data','Your information stays on this device','<span class="chevron">›</span>','data-settings-route="privacy"')}${settingRow('close','Clear attendance data','Remove saved attendance marks','<span class="chevron">›</span>','data-confirm="clear-attendance"')}${settingRow('close','Reset app','Remove all AttendDex data from this device','<span class="chevron">›</span>','data-confirm="reset-app"')}`)}
    ${settingsSection('App',`${preferenceSelect('Language','language',state.preferences.language,['English'])}${preferenceSelect('Week starts on','weekStarts',state.preferences.weekStarts,['Monday','Sunday','Saturday'])}${preferenceSelect('Date format','dateFormat',state.preferences.dateFormat,['MMM d','d MMM','MM/dd/yyyy'])}${preferenceSelect('Time format','timeFormat',state.preferences.timeFormat,['12-hour','24-hour'])}${preferenceSwitch('sun','Haptic feedback','A gentle tap on supported devices','haptics')}${preferenceSwitch('insight','Reduce animations','Use fewer motion effects','reduceAnimations')}`)}
    ${settingsSection('About',`${settingRow('insight','About AttendDex','Learn about the app','<span class="chevron">›</span>','data-settings-route="about"')}${settingRow('user','Version','AttendDex 1.4.2','')}${emailSettingRow('mail','Send Feedback','Share your thoughts or suggestions','mailto:ediweb.in@gmail.com?subject=AttendDex%20Feedback&body=Hi%20EDIWEB%2C%0A%0AI%27d%20like%20to%20share%20some%20feedback%20about%20AttendDex.%0A%0AFeedback%3A%0A')}${emailSettingRow('bug','Report a Bug','Tell us about a problem','mailto:ediweb.in@gmail.com?subject=AttendDex%20Bug%20Report&body=Hi%20EDIWEB%2C%0A%0AI%20found%20a%20bug%20in%20AttendDex.%0A%0AWhat%20happened%3A%0A%0ASteps%20to%20reproduce%3A%0A%0ADevice%3A%0A')}${settingRow('user','Terms of use','Local prototype terms','<span class="chevron">›</span>','data-settings-route="terms"')}`)}
    <input id="attendance-import-file" type="file" accept=".csv,.json,application/json,text/csv" hidden>
    <p class="local-data-note">Your profile, preferences, reminders and attendance data are stored locally on this device.</p>
  </div>${tabbar()}`;
}
function themeView() {
  const descriptions={System:'Follow your device appearance',Light:'Warm off-white and sage',Dark:'A softer dark appearance'};
  return `<div class="view-scroll">${subscreenHeader('Appearance')}<p class="page-subtitle settings-screen-copy">Choose how AttendDex looks on this device.</p><div class="settings-group">${optionCard('Theme',descriptions,['System','Light','Dark'],state.theme,'data-theme-choice')}</div><p class="settings-note">Your sage brand color stays consistent in every appearance.</p></div>${tabbar()}`;
}
function textSizeView() {
  const descriptions={'Small':'A little more fits on screen','Default':'The current AttendDex size','Large':'More comfortable reading','Extra Large':'The largest reading size'};
  return `<div class="view-scroll">${subscreenHeader('Text size')}<p class="page-subtitle settings-screen-copy">Adjust text across the app. Your layout stays familiar.</p><div class="settings-group">${optionCard('Text size',descriptions,['Small','Default','Large','Extra Large'],state.textSize,'data-text-size-choice')}</div><p class="text-size-preview">A little plan goes a long way.</p></div>${tabbar()}`;
}
function scheduleView() {
  const days=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  return `<div class="view-scroll">${subscreenHeader('Working days')}<p class="page-subtitle settings-screen-copy">Select the days you usually have classes.</p><form id="schedule-form"><div class="settings-card schedule-card">${days.map(day=>`<label class="setting-row schedule-day"><span class="setting-label">${day}</span><input type="checkbox" name="workingDays" value="${day}" ${state.preferences.workingDays.includes(day)?'checked':''}></label>`).join('')}</div><button class="primary-button schedule-save" type="submit">Save schedule</button></form></div>${tabbar()}`;
}
function aboutView() {
  return `<div class="view-scroll">${subscreenHeader('About AttendDex')}<div class="about-mark"><img src="assets/attenddex-wordmark.png" alt="AttendDex"></div><a class="about-copy about-maker-link" href="https://ediweb.netlify.app/?utm_source=ig&amp;utm_medium=social&amp;utm_content=link_in_bio&amp;fbclid=PAdGRleAUxqrZleHRuA2FlbQIxMQBwZG9mAmZkaWQWUPw0FSWfHl_hUDA6eDHuK9xi4d8b4HNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp719UmVi_VCX5LFlrMjiSW3xbEMiqzK3C2SfBx7mvhUUcEmeDVYuB_GGQ8rl_aem_QSYI3LHlSeyMLtUUFGMPIQ" target="_blank" rel="noopener noreferrer">Made by EDIWEB</a></div>${tabbar()}`;
}
function privacyView() {
  return `<div class="view-scroll">${subscreenHeader('Privacy & data')}<div class="privacy-card"><span class="setting-icon">${icon('user')}</span><strong>Your data stays on this device.</strong><p>AttendDex stores your profile, reminders, preferences, and attendance data in this browser’s local storage. Nothing is sent to an AttendDex server.</p><p>Export a backup before clearing browser data if you want to keep a copy.</p></div>${settingRow('export','Export attendance','Download a CSV backup','<span class="chevron">›</span>','data-export')}</div>${tabbar()}`;
}
function termsView() {
  return `<div class="view-scroll">${subscreenHeader('Terms of use')}<div class="privacy-card"><strong>About this prototype</strong><p>AttendDex is a student planning prototype. Attendance figures and course information shown here are sample data for demonstration and should not be treated as official academic records.</p><p>Your data is stored locally in this browser. You are responsible for keeping any exported backup in a safe place.</p></div></div>${tabbar()}`;
}
function confirmationDialog() {
  const reset=state.confirmAction==='reset-app';
  return `<div class="sheet-backdrop confirm-backdrop" data-cancel-confirm><section class="confirm-card" role="alertdialog" aria-modal="true" aria-labelledby="confirm-title"><h2 id="confirm-title">${reset?'Reset AttendDex?':'Clear attendance data?'}</h2><p>${reset?'This removes your saved profile, preferences, reminders, and attendance from this device.':'This removes saved attendance marks from this device. Your profile, preferences, and reminders will stay.'} This can’t be undone.</p><div class="confirm-actions"><button class="secondary-button" data-cancel-confirm type="button">Cancel</button><button class="destructive-button" data-confirm-action="${state.confirmAction}" type="button">${reset?'Reset app':'Clear data'}</button></div></section></div>`;
}
function render() {
  const app=document.getElementById('app');
  if(!state.authenticated){
    app.innerHTML=`${authView()}<div class="toast" id="toast"></div>`;
    applyAppearance();
    applyTextSize();
    return;
  }
  const existingNav=app.querySelector('.bottom-nav');
  const views={home:homeView,classes:classesView,detail:detailView,mark:markView,stats:statsView,settings:settingsView,profile:profileView,theme:themeView,'text-size':textSizeView,schedule:scheduleView,about:aboutView,privacy:privacyView,terms:termsView};
  const currentView=views[state.page]||settingsView;
  app.innerHTML=`${currentView()}${state.page==='home'&&state.showReminderForm?reminderForm():''}${state.confirmAction?confirmationDialog():''}<div class="toast" id="toast"></div>`;
  if(state.authTransition){
    app.classList.add('auth-transition-enter');
    window.setTimeout(()=>app.classList.remove('auth-transition-enter'),420);
    state.authTransition=false;
  }
  applyAppearance();
  applyTextSize();
  const activeTab = ['classes','detail','mark'].includes(state.page)?'stats':['profile','theme','text-size','schedule','about','privacy','terms'].includes(state.page)?'settings':state.page;
  const tabs = ['home','stats','settings'];
  const nextNavIndex = Math.max(0,tabs.indexOf(activeTab));
  const newNav=app.querySelector('.bottom-nav');
  const nav=existingNav&&newNav?(newNav.replaceWith(existingNav),existingNav):newNav;
  if(nav) {
    for(const item of nav.querySelectorAll('.nav-item')) {
      const selected=item.dataset.page===activeTab;
      item.classList.toggle('active',selected);
      item.setAttribute('aria-selected',String(selected));
    }
    if(!existingNav) nav.style.setProperty('--active-index',nextNavIndex);
    else if(nextNavIndex!==renderedNavIndex) {
      cancelAnimationFrame(navAnimationFrame);
      navAnimationFrame=requestAnimationFrame(()=>nav.isConnected&&nav.style.setProperty('--active-index',nextNavIndex));
    }
  }
  renderedNavIndex=nextNavIndex;
  applyTextSize();
}
function showToast(text) {
  const toast=document.getElementById('toast');
  toast.textContent=text;toast.classList.add('show');
  window.clearTimeout(showToast.timer);
  showToast.timer=window.setTimeout(()=>toast.classList.remove('show'),2100);
}
function setAuthError(message) {
  const error=document.getElementById('auth-error');
  if(error)error.textContent=message;
}
function getLocalAccount() {
  const saved=localStorage.getItem('attenddex-local-account');
  if(!saved)return null;
  const account=JSON.parse(saved);
  if(!account||typeof account.identifier!=='string'||typeof account.salt!=='string'||typeof account.passwordHash!=='string') {
    throw new Error('The saved local account is invalid.');
  }
  return account;
}
function toBase64(bytes) {
  let binary='';
  for(const byte of bytes)binary+=String.fromCharCode(byte);
  return btoa(binary);
}
function fromBase64(value) {
  return Uint8Array.from(atob(value),character=>character.charCodeAt(0));
}
async function hashLocalPassword(password,salt) {
  if(!globalThis.crypto?.subtle)throw new Error('Secure local sign-in is not available in this browser.');
  const encoder=new TextEncoder();
  const key=await crypto.subtle.importKey('raw',encoder.encode(password),'PBKDF2',false,['deriveBits']);
  const bits=await crypto.subtle.deriveBits({name:'PBKDF2',salt,iterations:150000,hash:'SHA-256'},key,256);
  return new Uint8Array(bits);
}
async function authenticateForm(form) {
  if(state.authBusy)return;
  const data=new FormData(form);
  const identifier=String(data.get('identifier')||'').trim().toLowerCase();
  const password=String(data.get('password')||'');
  const signup=form.id==='auth-signup-form';
  setAuthError('');
  if(!identifier||!password){setAuthError('Enter your email or username and password.');return;}
  state.authBusy=true;
  const submit=form.querySelector('[type="submit"]');
  if(submit){submit.disabled=true;submit.textContent=signup?'Creating account…':'Signing in…';}
  try {
    const account=getLocalAccount();
    if(signup){
      const name=String(data.get('name')||'').trim();
      const confirmPassword=String(data.get('confirmPassword')||'');
      if(name.length<2)throw new Error('Enter your name to create an account.');
      if(password.length<8)throw new Error('Use a password with at least 8 characters.');
      if(password!==confirmPassword)throw new Error('Your passwords don’t match.');
      if(account)throw new Error('This device already has a local account. Sign in instead.');
      const salt=crypto.getRandomValues(new Uint8Array(16));
      const passwordHash=await hashLocalPassword(password,salt);
      persistAuthAccount({identifier,salt:toBase64(salt),passwordHash:toBase64(passwordHash)});
      if(state.profile.name==='Maya Chen'){
        const updated={...state.profile,name,initials:profileInitials(name),email:identifier.includes('@')?identifier:state.profile.email};
        if(persistValue('attenddex-profile',updated))state.profile=updated;
      }
    }else{
      if(!account||account.identifier!==identifier)throw new Error('We couldn’t sign you in with those details.');
      const attempted=await hashLocalPassword(password,fromBase64(account.salt));
      const expected=fromBase64(account.passwordHash);
      let difference=attempted.length^expected.length;
      for(let i=0;i<Math.max(attempted.length,expected.length);i++)difference|=(attempted[i]||0)^(expected[i]||0);
      if(difference!==0)throw new Error('We couldn’t sign you in with those details.');
    }
    localStorage.setItem('attenddex-auth-session','signed-in');
    state.authenticated=true;
    state.authBusy=false;
    state.authTransition=true;
    state.authScreen='sign-in';
    state.page='home';
    render();
  }catch(error){
    console.error('AttendDex local authentication failed.',error);
    state.authBusy=false;
    const current=document.getElementById('auth-error');
    if(current)current.textContent=error.message||'Sign-in isn’t available right now.';
    else {render();setAuthError(error.message||'Sign-in isn’t available right now.');}
    const button=document.querySelector('.auth-primary');
    if(button){button.disabled=false;button.textContent=signup?'Create account':'Sign In';}
  }
}
function persistAuthAccount(account) {
  try {
    localStorage.setItem('attenddex-local-account',JSON.stringify(account));
  } catch(error) {
    console.error('Could not save the local account.',error);
    throw new Error('Could not save your account on this device.');
  }
}
function togglePreference(path) {
  const parts=path.split('.');
  let parent=state.preferences;
  for(const part of parts.slice(0,-1))parent=parent[part];
  const key=parts[parts.length-1];
  parent[key]=!parent[key];
  savePreferences();
  render();
}
function executeConfirmedAction(action) {
  state.confirmAction='';
  if(action==='clear-attendance'){
    try {
      localStorage.removeItem('attenddex-attendance');
      localStorage.removeItem('attenddex-imported-attendance');
    } catch(error) {
      console.error('Could not clear attendance data.',error);
      showToast('Could not clear data on this device');
      return;
    }
    state.marked={};state.importedAttendance={};
    render();showToast('Attendance data cleared');return;
  }
  if(action==='reset-app'){
    try {
      ['attenddex-profile','attenddex-preferences','attenddex-attendance','attenddex-imported-attendance','attenddex-reminders'].forEach(key=>localStorage.removeItem(key));
    } catch(error) {
      console.error('Could not reset AttendDex data.',error);
      showToast('Could not reset data on this device');
      return;
    }
    state.profile=cloneValue(defaultProfile);
    state.preferences=cloneValue(defaultPreferences);
    state.target=defaultPreferences.target;state.theme=defaultPreferences.theme;state.textSize=defaultPreferences.textSize;
    state.marked={};state.importedAttendance={};state.reminders=cloneValue(sampleReminders);
    state.page='settings';render();showToast('AttendDex has been reset');return;
  }
}
function parseCsv(text) {
  const rows=[];let row=[],field='',quoted=false;
  for(let i=0;i<text.length;i++){
    const char=text[i];
    if(char==='"'&&quoted&&text[i+1]==='"'){field+='"';i++;continue;}
    if(char==='"'){quoted=!quoted;continue;}
    if(char===','&&!quoted){row.push(field);field='';continue;}
    if((char==='\n'||char==='\r')&&!quoted){
      if(char==='\r'&&text[i+1]==='\n')i++;
      row.push(field);field='';
      if(row.some(cell=>cell.trim()))rows.push(row);
      row=[];continue;
    }
    field+=char;
  }
  if(field||row.length){row.push(field);rows.push(row);}
  return rows;
}
function importAttendance(text,fileName) {
  let records;
  if(fileName.toLowerCase().endsWith('.json')){
    const parsed=JSON.parse(text);
    records=Array.isArray(parsed)?parsed:parsed.attendance;
  }else{
    const rows=parseCsv(text);
    if(rows.length<2)throw new Error('The CSV has no attendance rows.');
    const headers=rows[0].map(value=>value.trim().toLowerCase().replace(/[\s_-]+/g,''));
    records=rows.slice(1).map(row=>Object.fromEntries(headers.map((key,index)=>[key,row[index]||''])));
  }
  if(!Array.isArray(records)||!records.length)throw new Error('No attendance records were found.');
  const imported={};
  for(const item of records){
    const record=Object.fromEntries(Object.entries(item||{}).map(([key,value])=>[key.toLowerCase().replace(/[\s_-]+/g,''),value]));
    const lookup=String(record.subjectid||record.id||record.code||record.subject||'').trim().toLowerCase();
    const course=courses.find(item=>[item.id,item.code,item.name].some(value=>value.toLowerCase()===lookup));
    if(!course)continue;
    if(record.attended===''||record.total==='')continue;
    const attended=Number(record.attended),total=Number(record.total);
    if(!Number.isInteger(attended)||!Number.isInteger(total)||attended<0||total<0||attended>total)continue;
    imported[course.id]={attended,total};
  }
  if(!Object.keys(imported).length)throw new Error('No valid records matched the AttendDex class list.');
  if(!persistValue('attenddex-imported-attendance',imported))return;
  state.importedAttendance=imported;state.marked={};persistValue('attenddex-attendance',state.marked);
  render();showToast(`Imported attendance for ${Object.keys(imported).length} classes`);
}
function formatReminderTime(time) {
  if(!time)return 'Any time';
  const date=new Date(`2000-01-01T${time}`);
  return new Intl.DateTimeFormat('en',{hour:'numeric',minute:'2-digit',hour12:state.preferences.timeFormat!=='24-hour'}).format(date);
}
function formatReminderDate(value) {
  if(value===dateOffset(0))return 'Today';
  if(value===dateOffset(1))return 'Tomorrow';
  const formats={'MMM d':{month:'short',day:'numeric'},'d MMM':{day:'numeric',month:'short'},'MM/dd/yyyy':{month:'2-digit',day:'2-digit',year:'numeric'}};
  return new Intl.DateTimeFormat('en',formats[state.preferences.dateFormat]||formats['MMM d']).format(new Date(`${value}T12:00:00`));
}
function optimizeProfilePhoto(file) {
  return new Promise((resolve,reject)=>{
    if(!file.type.startsWith('image/')){reject(new Error('Choose an image file to use as your profile photo.'));return;}
    if(file.size>20*1024*1024){reject(new Error('Choose an image smaller than 20 MB.'));return;}
    const reader=new FileReader();
    reader.onerror=()=>reject(reader.error||new Error('Could not read this photo.'));
    reader.onload=()=>{
      const image=new Image();
      image.onerror=()=>reject(new Error('This image could not be opened. Try another photo.'));
      image.onload=()=>{
        const scale=Math.min(1,512/Math.max(image.naturalWidth,image.naturalHeight));
        const canvas=document.createElement('canvas');
        canvas.width=Math.max(1,Math.round(image.naturalWidth*scale));
        canvas.height=Math.max(1,Math.round(image.naturalHeight*scale));
        const context=canvas.getContext('2d');
        if(!context){reject(new Error('Photo editing is not supported in this browser.'));return;}
        context.fillStyle='#ffffff';
        context.fillRect(0,0,canvas.width,canvas.height);
        context.drawImage(image,0,0,canvas.width,canvas.height);
        try{resolve(canvas.toDataURL('image/jpeg',.84));}
        catch(error){console.error('Could not encode the selected profile photo.',error);reject(new Error('Could not prepare this photo for local storage.'));}
      };
      image.src=String(reader.result);
    };
    reader.readAsDataURL(file);
  });
}
function updateProfilePhotoElements() {
  const previewProfile={...state.profile};
  const nameInput=document.getElementById('profile-name');
  const initialsInput=document.getElementById('profile-initials');
  if(nameInput)previewProfile.name=nameInput.value.trim()||'Student';
  if(initialsInput)previewProfile.initials=initialsInput.value.trim().toUpperCase()||profileInitials(previewProfile.name);
  document.querySelectorAll('.topbar .avatar,.settings-profile .profile-avatar').forEach(element=>{
    element.innerHTML=profileAvatarContent(state.profile);
  });
  const preview=document.getElementById('profile-preview-avatar');
  if(preview)preview.innerHTML=profileAvatarContent(previewProfile);
  const actions=document.querySelector('.photo-actions');
  if(actions)actions.innerHTML=`<button class="photo-action" type="button" data-change-photo>Change photo</button>${state.profile.photo?'<button class="photo-action remove-photo" type="button" data-remove-photo>Remove photo</button>':''}`;
}
function readTextFile(file) {
  if(typeof file.text==='function')return file.text();
  return new Promise((resolve,reject)=>{
    const reader=new FileReader();
    reader.onload=()=>resolve(String(reader.result||''));
    reader.onerror=()=>reject(reader.error||new Error('Could not read the selected file.'));
    reader.readAsText(file);
  });
}
document.addEventListener('click',event=>{
  const target=event.target.closest('button,[data-course],[data-theme],[data-privacy],[data-export],[data-import],[data-toggle-reminder],[data-delete-reminder],[data-close-sheet],[data-settings-route],[data-confirm],[data-feedback],[data-theme-choice],[data-text-size-choice],[data-confirm-action],[data-cancel-confirm]');
  if(!target)return;
  if(target.dataset.authScreen){
    state.authScreen=target.dataset.authScreen;
    render();
    document.querySelector(state.authScreen==='sign-up'?'#auth-name':'#auth-identifier')?.focus({preventScroll:true});
    return;
  }
  if(target.hasAttribute('data-toggle-auth-password')){
    const input=target.closest('.auth-password-wrap')?.querySelector('input');
    if(input){
      const visible=input.type==='password';
      input.type=visible?'text':'password';
      target.setAttribute('aria-pressed',String(visible));
      target.setAttribute('aria-label',visible?'Hide password':'Show password');
    }
    return;
  }
  if(target.dataset.page){if(target.classList.contains('nav-item')&&state.preferences.haptics&&state.page!==target.dataset.page&&navigator.vibrate)navigator.vibrate(8);state.page=target.dataset.page;render();return;}
  if(target.hasAttribute('data-settings-back')){state.page='settings';render();return;}
  if(target.dataset.settingsRoute){state.page=target.dataset.settingsRoute;render();return;}
  if(target.dataset.themeChoice){state.theme=target.dataset.themeChoice;state.preferences.theme=state.theme;savePreferences();render();return;}
  if(target.dataset.textSizeChoice){state.textSize=target.dataset.textSizeChoice;state.preferences.textSize=state.textSize;savePreferences();render();return;}
  if(target.dataset.confirm){state.confirmAction=target.dataset.confirm;render();return;}
  if(target.hasAttribute('data-cancel-confirm')){
    if(target.classList.contains('confirm-backdrop')&&event.target!==target)return;
    state.confirmAction='';render();return;
  }
  if(target.dataset.confirmAction){executeConfirmedAction(target.dataset.confirmAction);return;}
  if(target.hasAttribute('data-feedback')){window.location.href='mailto:?subject=AttendDex%20feedback';return;}
  if(target.hasAttribute('data-change-photo')){document.getElementById('profile-photo-file')?.click();return;}
  if(target.hasAttribute('data-remove-photo')){
    const updated={...state.profile,photo:''};
    if(persistValue('attenddex-profile',updated)){state.profile=updated;updateProfilePhotoElements();showToast('Profile photo removed');}
    return;
  }
  if(target.hasAttribute('data-import')){document.getElementById('attendance-import-file')?.click();return;}
  if(target.hasAttribute('data-add-reminder')){state.showReminderForm=true;render();document.getElementById('reminder-title')?.focus();return;}
  if(target.hasAttribute('data-close-sheet')){if(target.classList.contains('sheet-backdrop')&&event.target!==target)return;state.showReminderForm=false;render();return;}
  if(target.hasAttribute('data-reminder-type')){
    const form=target.closest('#reminder-form');
    if(!form)return;
    form.querySelector('#reminder-category').value=target.dataset.reminderType;
    form.querySelectorAll('[data-reminder-type]').forEach(option=>{
      const selected=option===target;
      option.classList.toggle('selected',selected);
      option.setAttribute('aria-pressed',String(selected));
    });
    return;
  }
  if(target.dataset.toggleReminder){state.reminders=state.reminders.map(reminder=>reminder.id===target.dataset.toggleReminder?{...reminder,done:!reminder.done}:reminder);saveReminders();render();return;}
  if(target.dataset.deleteReminder){state.reminders=state.reminders.filter(reminder=>reminder.id!==target.dataset.deleteReminder);saveReminders();render();return;}
  if(target.dataset.course){state.previous=state.page==='home'?'home':'classes';state.selected=target.dataset.course;state.page='detail';render();return;}
  if(target.hasAttribute('data-back')){state.page=state.page==='mark'?state.previous:'classes';render();return;}
  if(target.hasAttribute('data-mark')){state.previous=state.page==='mark'?state.previous:state.page;state.page='mark';render();return;}
  if(target.dataset.attendance){state.marked[state.selected]=target.dataset.attendance;persistValue('attenddex-attendance',state.marked);render();return;}
  if(target.dataset.filter){state.filter=target.dataset.filter;render();return;}
  if(target.hasAttribute('data-sort')){state.sort=state.sort==='Name'?'Attendance':'Name';render();return;}
  if(target.dataset.period){state.period=target.dataset.period;render();return;}
  if(target.dataset.prefToggle){togglePreference(target.dataset.prefToggle);return;}
  if(target.classList.contains('switch')){target.classList.toggle('on');target.setAttribute('aria-pressed',target.classList.contains('on'));return;}
  if(target.hasAttribute('data-toast')){showToast('More subject options coming soon');return;}
  if(target.hasAttribute('data-theme')){state.page='theme';render();return;}
  if(target.hasAttribute('data-privacy')){showToast('Your attendance data is stored on this device');return;}
  if(target.hasAttribute('data-export')){
    const rows=[['SubjectId','Subject','Code','Attended','Total','Attendance'],...courses.map(c=>{const counts=getCounts(c);return [c.id,c.name,c.code,counts.attended,counts.total,`${getAttendance(c)}%`];})];
    const csv=rows.map(r=>r.map(v=>`"${String(v).replace(/"/g,'""')}"`).join(',')).join('\n');
    const url=URL.createObjectURL(new Blob([csv],{type:'text/csv'}));
    const link=document.createElement('a');link.href=url;link.download='attenddex-attendance.csv';link.click();window.setTimeout(()=>URL.revokeObjectURL(url),1000);showToast('Attendance CSV downloaded');
  }
});
document.addEventListener('submit',event=>{
  if(event.target.id==='auth-signin-form'||event.target.id==='auth-signup-form'){
    event.preventDefault();
    void authenticateForm(event.target);
    return;
  }
  if(event.target.id==='profile-form'){
    event.preventDefault();
    const data=new FormData(event.target);
    const name=String(data.get('name')||'').trim();
    if(!name){document.getElementById('profile-name')?.focus();return;}
    const profile={name,initials:String(data.get('initials')||'').trim().slice(0,3).toUpperCase()||profileInitials(name),course:String(data.get('course')||'').trim(),year:String(data.get('year')||'').trim(),school:String(data.get('school')||'').trim(),semester:String(data.get('semester')||'').trim(),email:String(data.get('email')||'').trim(),photo:state.profile.photo||''};
    if(persistValue('attenddex-profile',profile)){state.profile=profile;state.page='settings';render();showToast('Profile saved');}
    return;
  }
  if(event.target.id==='schedule-form'){
    event.preventDefault();
    state.preferences.workingDays=new FormData(event.target).getAll('workingDays').map(String);
    savePreferences();state.page='settings';render();showToast('Class schedule saved');return;
  }
  if(event.target.id!=='reminder-form')return;
  event.preventDefault();
  const formData=new FormData(event.target);
  const title=String(formData.get('title')||'').trim();
  if(!title){document.getElementById('reminder-title')?.focus();return;}
  state.reminders.push({id:`reminder-${Date.now()}`,title,category:String(formData.get('category')),due:String(formData.get('due')),time:String(formData.get('time')||''),subject:String(formData.get('subject')||''),notes:String(formData.get('notes')||'').trim(),done:false});
  state.showReminderForm=false;
  saveReminders();
  render();
  showToast('Reminder added to your day');
});
function saveReminders() {
  try {
    localStorage.setItem('attenddex-reminders',JSON.stringify(state.reminders));
  } catch(error) {
    console.error('Could not save reminders.',error);
    showToast('Reminder saved for this session, but could not be stored on this device');
  }
}
document.addEventListener('change',event=>{
  if(event.target.matches('.target-select')){
    state.target=parseInt(event.target.value,10);
    savePreferences();
    if(['detail','settings','classes','stats'].includes(state.page))render();
    return;
  }
  if(event.target.matches('.settings-select')){
    const key=event.target.dataset.pref;
    state.preferences[key]=key==='warningThreshold'?Number.parseInt(event.target.value,10):event.target.value;
    savePreferences();render();return;
  }
  if(event.target.id==='attendance-import-file'&&event.target.files?.[0]){
    const file=event.target.files[0];
    readTextFile(file).then(content=>importAttendance(content,file.name)).catch(error=>{
      console.error('Could not import attendance.',error);
      showToast(error.message||'Could not read this attendance file');
    }).finally(()=>{event.target.value='';});
  }
  if(event.target.id==='profile-photo-file'&&event.target.files?.[0]){
    const input=event.target;
    optimizeProfilePhoto(input.files[0]).then(photo=>{
      const updated={...state.profile,photo};
      if(persistValue('attenddex-profile',updated)){state.profile=updated;updateProfilePhotoElements();showToast('Profile photo updated');}
    }).catch(error=>{
      console.error('Could not save profile photo.',error);
      showToast(error.message||'Could not use this photo');
    }).finally(()=>{input.value='';});
  }
});
document.addEventListener('input',event=>{
  if(event.target.id==='reminder-title'){
    const saveButton=document.querySelector('#reminder-form .save-reminder');
    if(saveButton)saveButton.disabled=!event.target.value.trim();
  }
  if(event.target.id==='profile-name'){
    const value=event.target.value.trim()||'Student';
    const initials=document.getElementById('profile-initials');
    if(initials&&initials.value.trim().toUpperCase()===profileInitials(state.profile.name))initials.value=profileInitials(value);
    const previewName=document.getElementById('profile-preview-name');
    const previewAvatar=document.getElementById('profile-preview-avatar');
    if(previewName)previewName.textContent=value;
    if(previewAvatar&&!state.profile.photo)previewAvatar.textContent=initials?.value.trim().toUpperCase()||profileInitials(value);
  }
  if(event.target.id==='profile-initials'){
    const avatar=document.getElementById('profile-preview-avatar');
    if(avatar&&!state.profile.photo)avatar.textContent=event.target.value.trim().toUpperCase()||profileInitials(document.getElementById('profile-name')?.value);
  }
});
document.addEventListener('focusin',event=>{
  if(event.target.closest('.reminder-sheet')){
    window.setTimeout(()=>event.target.scrollIntoView({block:'nearest',behavior:state.preferences.reduceAnimations?'auto':'smooth'}),180);
  }
});
document.addEventListener('keydown',event=>{
  if(event.key==='Escape'&&state.showReminderForm){state.showReminderForm=false;render();return;}
  if((event.key==='Enter'||event.key===' ')&&event.target.matches('[role="button"][data-settings-route],[role="button"][data-confirm],[role="button"][data-export],[role="button"][data-import],[role="button"][data-feedback]')){
    event.preventDefault();event.target.click();
  }
});
const systemAppearance=window.matchMedia?.('(prefers-color-scheme: dark)');
if(systemAppearance?.addEventListener)systemAppearance.addEventListener('change',()=>{if(state.theme==='System')render();});
else systemAppearance?.addListener?.(()=>{if(state.theme==='System')render();});
render();
