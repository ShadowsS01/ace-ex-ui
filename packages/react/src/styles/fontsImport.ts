import { globalCss } from ".";

export const fontsImport = globalCss({
  "@font-face": [
    /* cyrillic-ext */
    {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 400,
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7SUc.woff2) format('woff2')",
      unicodeRange:
        "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
    },
    /* cyrillic */
    {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 400,
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7SUc.woff2) format('woff2')",
      unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
    },
    /* greek-ext */
    {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 400,
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7SUc.woff2) format('woff2')",
      unicodeRange: "U+1F00-1FFF",
    },
    /* greek */
    {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 400,
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7SUc.woff2) format('woff2')",
      unicodeRange: "U+0370-03FF",
    },
    /* vietnamese */
    {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 400,
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7SUc.woff2) format('woff2')",
      unicodeRange:
        "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
    },
    /* latin-ext */
    {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 400,
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7SUc.woff2) format('woff2')",
      unicodeRange:
        "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
    },
    /* latin */
    {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 400,
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2')",
      unicodeRange:
        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    },
    /* cyrillic-ext */
    {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 500,
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7SUc.woff2) format('woff2')",
      unicodeRange:
        "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
    },
    /* cyrillic */
    {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 500,
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7SUc.woff2) format('woff2')",
      unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
    },
    /* greek-ext */
    {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 500,
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7SUc.woff2) format('woff2')",
      unicodeRange: "U+1F00-1FFF",
    },
    /* greek */
    {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 500,
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7SUc.woff2) format('woff2')",
      unicodeRange: "U+0370-03FF",
    },
    /* vietnamese */
    {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 500,
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7SUc.woff2) format('woff2')",
      unicodeRange:
        "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
    },
    /* latin-ext */
    {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 500,
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7SUc.woff2) format('woff2')",
      unicodeRange:
        "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
    },
    /* latin */
    {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 500,
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2')",
      unicodeRange:
        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    },
    /* cyrillic-ext */
    {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 600,
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7SUc.woff2) format('woff2')",
      unicodeRange:
        "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
    },
    /* cyrillic */
    {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 600,
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7SUc.woff2) format('woff2')",
      unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
    },
    /* greek-ext */
    {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 600,
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7SUc.woff2) format('woff2')",
      unicodeRange: "U+1F00-1FFF",
    },
    /* greek */
    {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 600,
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7SUc.woff2) format('woff2')",
      unicodeRange: "U+0370-03FF",
    },
    /* vietnamese */
    {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 600,
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7SUc.woff2) format('woff2')",
      unicodeRange:
        "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
    },
    /* latin-ext */
    {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 600,
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7SUc.woff2) format('woff2')",
      unicodeRange:
        "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
    },
    /* latin */
    {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 600,
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2')",
      unicodeRange:
        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    },
    /* cyrillic-ext */
    {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 700,
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7SUc.woff2) format('woff2')",
      unicodeRange:
        "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
    },
    /* cyrillic */
    {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 700,
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7SUc.woff2) format('woff2')",
      unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
    },
    /* greek-ext */
    {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 700,
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7SUc.woff2) format('woff2')",
      unicodeRange: "U+1F00-1FFF",
    },
    /* greek */
    {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 700,
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7SUc.woff2) format('woff2')",
      unicodeRange: "U+0370-03FF",
    },
    /* vietnamese */
    {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 700,
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7SUc.woff2) format('woff2')",
      unicodeRange:
        "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
    },
    /* latin-ext */
    {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 700,
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7SUc.woff2) format('woff2')",
      unicodeRange:
        "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
    },
    /* latin */
    {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 700,
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2')",
      unicodeRange:
        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    },
    /* cyrillic-ext */
    {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: 400,
      fontStretch: "100%",
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSKmu1aB.woff2) format('woff2')",
      unicodeRange:
        "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
    },
    /* cyrillic */
    {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: 400,
      fontStretch: "100%",
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSumu1aB.woff2) format('woff2')",
      unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
    },
    /* greek-ext */
    {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: 400,
      fontStretch: "100%",
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSOmu1aB.woff2) format('woff2')",
      unicodeRange: "U+1F00-1FFF",
    },
    /* greek */
    {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: 400,
      fontStretch: "100%",
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSymu1aB.woff2) format('woff2')",
      unicodeRange: "U+0370-03FF",
    },
    /* hebrew */
    {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: 400,
      fontStretch: "100%",
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS2mu1aB.woff2) format('woff2')",
      unicodeRange: "U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F",
    },
    /* vietnamese */
    {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: 400,
      fontStretch: "100%",
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSCmu1aB.woff2) format('woff2')",
      unicodeRange:
        "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
    },
    /* latin-ext */
    {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: 400,
      fontStretch: "100%",
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSGmu1aB.woff2) format('woff2')",
      unicodeRange:
        "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
    },
    /* latin */
    {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: 400,
      fontStretch: "100%",
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-muw.woff2) format('woff2')",
      unicodeRange:
        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    },
    /* cyrillic-ext */
    {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: 500,
      fontStretch: "100%",
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSKmu1aB.woff2) format('woff2')",
      unicodeRange:
        "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
    },
    /* cyrillic */
    {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: 500,
      fontStretch: "100%",
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSumu1aB.woff2) format('woff2')",
      unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
    },
    /* greek-ext */
    {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: 500,
      fontStretch: "100%",
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSOmu1aB.woff2) format('woff2')",
      unicodeRange: "U+1F00-1FFF",
    },
    /* greek */
    {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: 500,
      fontStretch: "100%",
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSymu1aB.woff2) format('woff2')",
      unicodeRange: "U+0370-03FF",
    },
    /* hebrew */
    {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: 500,
      fontStretch: "100%",
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS2mu1aB.woff2) format('woff2')",
      unicodeRange: "U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F",
    },
    /* vietnamese */
    {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: 500,
      fontStretch: "100%",
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSCmu1aB.woff2) format('woff2')",
      unicodeRange:
        "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
    },
    /* latin-ext */
    {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: 500,
      fontStretch: "100%",
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSGmu1aB.woff2) format('woff2')",
      unicodeRange:
        "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
    },
    /* latin */
    {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: 500,
      fontStretch: "100%",
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-muw.woff2) format('woff2')",
      unicodeRange:
        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    },
    /* cyrillic-ext */
    {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: 600,
      fontStretch: "100%",
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSKmu1aB.woff2) format('woff2')",
      unicodeRange:
        "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
    },
    /* cyrillic */
    {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: 600,
      fontStretch: "100%",
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSumu1aB.woff2) format('woff2')",
      unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
    },
    /* greek-ext */
    {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: 600,
      fontStretch: "100%",
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSOmu1aB.woff2) format('woff2')",
      unicodeRange: "U+1F00-1FFF",
    },
    /* greek */
    {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: 600,
      fontStretch: "100%",
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSymu1aB.woff2) format('woff2')",
      unicodeRange: "U+0370-03FF",
    },
    /* hebrew */
    {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: 600,
      fontStretch: "100%",
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS2mu1aB.woff2) format('woff2')",
      unicodeRange: "U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F",
    },
    /* vietnamese */
    {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: 600,
      fontStretch: "100%",
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSCmu1aB.woff2) format('woff2')",
      unicodeRange:
        "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
    },
    /* latin-ext */
    {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: 600,
      fontStretch: "100%",
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSGmu1aB.woff2) format('woff2')",
      unicodeRange:
        "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
    },
    /* latin */
    {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: 600,
      fontStretch: "100%",
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-muw.woff2) format('woff2')",
      unicodeRange:
        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    },
    /* cyrillic-ext */
    {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: 700,
      fontStretch: "100%",
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSKmu1aB.woff2) format('woff2')",
      unicodeRange:
        "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
    },
    /* cyrillic */
    {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: 700,
      fontStretch: "100%",
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSumu1aB.woff2) format('woff2')",
      unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
    },
    /* greek-ext */
    {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: 700,
      fontStretch: "100%",
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSOmu1aB.woff2) format('woff2')",
      unicodeRange: "U+1F00-1FFF",
    },
    /* greek */
    {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: 700,
      fontStretch: "100%",
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSymu1aB.woff2) format('woff2')",
      unicodeRange: "U+0370-03FF",
    },
    /* hebrew */
    {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: 700,
      fontStretch: "100%",
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS2mu1aB.woff2) format('woff2')",
      unicodeRange: "U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F",
    },
    /* vietnamese */
    {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: 700,
      fontStretch: "100%",
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSCmu1aB.woff2) format('woff2')",
      unicodeRange:
        "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
    },
    /* latin-ext */
    {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: 700,
      fontStretch: "100%",
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSGmu1aB.woff2) format('woff2')",
      unicodeRange:
        "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
    },
    /* latin */
    {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: 700,
      fontStretch: "100%",
      fontDisplay: "swap",
      src: "url(https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-muw.woff2) format('woff2')",
      unicodeRange:
        "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
    },
  ],
});
