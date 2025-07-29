import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const myCustomPreset = definePreset(Aura, {
  semantic: {
    // === ESCALA DE COLOR PRIMARIO: Azul Prusia (Profesional, serio, dental) ===
    primary: {
      50: '#E6EEF3',
      100: '#B3C9D9',
      200: '#80A4BF',
      300: '#4D7FA5',
      400: '#2A5A8C',
      500: '#093956', // Tu color base claro
      600: '#082C43', // Tu color base oscuro (más profundo)
      700: '#061F31',
      800: '#051828',
      950: '#04121F'
    },
    secondary: {
      50: '#F0F9FF',
      100: '#E0F2FE',
      200: '#BAF0FC',
      300: '#7DD5F8',
      400: '#1BB7F1',
      500: '#0EA5E9',
      600: '#0C8DE3',
      700: '#0B7DD4',
      800: '#1D4ED8',
      950: '#1E40AF'
    },
    success: {
      50: '#ECFDF5',
      100: '#D1FAE5',
      200: '#A7F3D0',
      300: '#6EE7B7',
      400: '#34D399',
      500: '#10B981',
      600: '#059669',
      700: '#047857',
      800: '#065F46',
      950: '#064E3B'
    },
    info: {
      50: '#EFF6FF',
      100: '#DBEAFE',
      200: '#BFDBFE',
      300: '#93C5FD',
      400: '#60A5FA',
      500: '#3B82F6',
      600: '#2563EB',
      700: '#1D4ED8',
      800: '#1E40AF',
      950: '#1E3A8A'
    },
    warn: {
      50: '#FFFAEB',
      100: '#FEF3C7',
      200: '#FDE68A',
      300: '#FCD34D',
      400: '#FBBF24',
      500: '#F59E0B',
      600: '#D97706',
      700: '#B45309',
      800: '#92400E',
      950: '#7C2D12'
    },
    help: {
      50: '#F0F9FF',
      100: '#E0F2FE',
      200: '#BAF0FC',
      300: '#7DD5F8',
      400: '#1BB7F1',
      500: '#0EA5E9',
      600: '#0C8DE3',
      700: '#0B7DD4',
      800: '#1D4ED8',
      950: '#1E40AF'
    },
    danger: {
      50: '#FEF2F2',
      100: '#FEE2E2',
      200: '#FECACA',
      300: '#FCA5A5',
      400: '#F87171',
      500: '#EF4444',
      600: '#DC2626',
      700: '#B91C1C',
      800: '#991B1B',
      950: '#7F1D1D'
    },
    contrast: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      950: '#111827'
    },

    // === ESCALA NEUTRAL: Grises cálidos (basados en tus colores) ===
    neutral: {
      50: '#EBE9E8',  // Platinum – fondo principal cálido
      100: '#C7C5C4',  // Silver – detalles, bordes, hover
      200: '#A8A6A5',
      300: '#898786',
      400: '#6A6867',
      500: '#646C71',  // Dim Gray – texto principal
      600: '#5A6166',
      700: '#4F565B',
      800: '#454C50',
      950: '#3B4145'
    },
    colorScheme: {
      light: {
        surface: {
          0: '#FFFFFF',
          50: '{neutral.100}', // #C7C5C4 como fondo plateado
          100: '{neutral.100}',
          200: '{neutral.200}',
          300: '{neutral.300}',
          400: '{neutral.400}',
          500: '{neutral.500}',
          600: '{neutral.600}',
          700: '{neutral.700}',
          800: '{neutral.800}',
          900: '{neutral.950}'
        },
        text: {
          color: '#333333',
          secondaryColor: '{neutral.500}'
        },
        primary: {
          color: '{primary.500}', // #082C43
          inverseColor: '#FFFFFF',
          hoverColor: '{primary.400}',
          activeColor: '{primary.600}'
        }
      },
      dark: {
        surface: {
          0: '{neutral.950}',
          50: '{neutral.800}',
          100: '{neutral.700}',
          200: '{neutral.600}',
          300: '{neutral.500}',
          400: '{neutral.400}',
          500: '{neutral.300}',
          600: '{neutral.200}',
          700: '{neutral.100}', // #C7C5C4 en modo oscuro
          800: '{neutral.50}',
          900: '#FFFFFF'
        },
        text: {
          color: '#FFFFFF',
          secondaryColor: '{neutral.100}'
        },
        primary: {
          color: '{primary.50}',
          inverseColor: '{primary.950}',
          hoverColor: '{primary.100}',
          activeColor: '{primary.200}'
        }
      }
    },
    font: {
      family: 'Inter, sans-serif',
      size: {
        small: '0.875rem',
        base: '1rem',
        large: '1.25rem'
      }
    }
  },
  components: {
    button: {
      colorScheme: {
        light: {
          root: {
            sm: {
              fontSize: '{font.size.small}'
            },
            lg: {
              fontSize: '{font.size.large}'
            },
            label: {
              fontWeight: '700'
            },
            borderRadius: '8px',
            paddingY: '0.75rem',
            paddingX: '1.5rem',

            // === VARIANTES LLENAS (filled) ===
            primary: {
              background: '{primary.500}',
              hoverBackground: '{primary.400}',
              activeBackground: '{primary.600}',
              color: '#FFFFFF',
              hoverColor: '#FFFFFF',
              activeColor: '#FFFFFF'
            },
            secondary: {
              background: '{secondary.500}',
              hoverBackground: '{secondary.400}',
              activeBackground: '{secondary.600}',
              color: '#FFFFFF',
              hoverColor: '#FFFFFF',
              activeColor: '#FFFFFF'
            },
            success: {
              background: '{success.500}',
              hoverBackground: '{success.400}',
              activeBackground: '{success.600}',
              color: '#FFFFFF'
            },
            info: {
              background: '{info.500}',
              hoverBackground: '{info.400}',
              activeBackground: '{info.600}',
              color: '#FFFFFF'
            },
            warn: {
              background: '{warn.500}',
              hoverBackground: '{warn.400}',
              activeBackground: '{warn.600}',
              color: '#FFFFFF'
            },
            help: {
              background: '{help.500}',
              hoverBackground: '{help.400}',
              activeBackground: '{help.600}',
              color: '#FFFFFF'
            },
            danger: {
              background: '{danger.500}',
              hoverBackground: '{danger.400}',
              activeBackground: '{danger.600}',
              color: '#FFFFFF'
            },
            contrast: {
              background: '{contrast.800}',
              hoverBackground: '{contrast.700}',
              activeBackground: '{contrast.950}',
              color: '#FFFFFF'
            }
          },

          // === VARIANTES OUTLINED ===
          outlined: {
            primary: {
              borderColor: '{primary.500}',
              color: '{primary.500}',
              hoverBackground: '{primary.50}',
              activeBackground: '{primary.100}'
            },
            secondary: {
              borderColor: '{secondary.500}',
              color: '{secondary.500}',
              hoverBackground: '{secondary.50}',
              activeBackground: '{secondary.100}'
            },
            success: {
              borderColor: '{success.500}',
              color: '{success.500}',
              hoverBackground: '{success.50}',
              activeBackground: '{success.100}'
            },
            info: {
              borderColor: '{info.500}',
              color: '{info.500}',
              hoverBackground: '{info.50}',
              activeBackground: '{info.100}'
            },
            warn: {
              borderColor: '{warn.500}',
              color: '{warn.500}',
              hoverBackground: '{warn.50}',
              activeBackground: '{warn.100}'
            },
            help: {
              borderColor: '{help.500}',
              color: '{help.500}',
              hoverBackground: '{help.50}',
              activeBackground: '{help.100}'
            },
            danger: {
              borderColor: '{danger.500}',
              color: '{danger.500}',
              hoverBackground: '{danger.50}',
              activeBackground: '{danger.100}'
            },
            contrast: {
              borderColor: '{contrast.800}',
              color: '{contrast.800}',
              hoverBackground: '{neutral.100}',
              activeBackground: '{neutral.200}'
            },
            plain: {
              borderColor: 'transparent',
              color: '{neutral.500}',
              hoverBackground: '{neutral.100}',
              activeBackground: '{neutral.200}'
            }
          },

          // === VARIANTES TEXT (sin fondo, solo texto) ===
          text: {
            primary: {
              color: '{primary.500}',
              hoverBackground: '{primary.50}',
              activeBackground: '{primary.100}'
            },
            secondary: {
              color: '{secondary.500}',
              hoverBackground: '{secondary.50}',
              activeBackground: '{secondary.100}'
            },
            success: {
              color: '{success.500}',
              hoverBackground: '{success.50}',
              activeBackground: '{success.100}'
            },
            info: {
              color: '{info.500}',
              hoverBackground: '{info.50}',
              activeBackground: '{info.100}'
            },
            warn: {
              color: '{warn.500}',
              hoverBackground: '{warn.50}',
              activeBackground: '{warn.100}'
            },
            help: {
              color: '{help.500}',
              hoverBackground: '{help.50}',
              activeBackground: '{help.100}'
            },
            danger: {
              color: '{danger.500}',
              hoverBackground: '{danger.50}',
              activeBackground: '{danger.100}'
            },
            contrast: {
              color: '{contrast.800}',
              hoverBackground: '{neutral.100}',
              activeBackground: '{neutral.200}'
            },
            plain: {
              color: '{neutral.500}',
              hoverBackground: '{neutral.100}',
              activeBackground: '{neutral.200}'
            }
          },

          // === VARIANTE LINK ===
          link: {
            color: '{primary.600}',
            hoverColor: '{primary.700}',
            activeColor: '{primary.800}'
          }
        },

        // === MODO OSCURO (dark) ===
        dark: {
          root: {
            primary: {
              background: '{primary.700}',
              hoverBackground: '{primary.600}',
              activeBackground: '{primary.800}',
              color: '#FFFFFF'
            },
            // ... puedes extender el resto si necesitas modo oscuro completo
          },
          outlined: {
            primary: {
              borderColor: '{primary.400}',
              color: '{primary.300}',
              hoverBackground: '{primary.900}',
              activeBackground: '{primary.800}'
            }
            // ... más variantes en modo oscuro
          },
          text: {
            primary: {
              color: '{primary.300}',
              hoverBackground: '{primary.900}',
              activeBackground: '{primary.800}'
            }
          },
          link: {
            color: '{primary.300}',
            hoverColor: '{primary.200}',
            activeColor: '{primary.100}'
          }
        }
      }
    }
  }
});
