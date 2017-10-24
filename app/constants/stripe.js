const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_live_aHiaR4bOGhnmAjscTG2FbDIx'
  : 'pk_test_ezZP30PHZyeiJf2oHMvYR52f';

export default STRIPE_PUBLISHABLE;
