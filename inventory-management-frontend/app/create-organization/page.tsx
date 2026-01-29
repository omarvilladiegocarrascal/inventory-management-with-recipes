"use client"

"use client";
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {
  CheckCircleIcon,
  ChevronDownIcon,
} from '../components/icons';
import { OrganizationFormData, BusinessType } from '../types/organizationTypes';

import * as Yup from 'yup';

const initialValues: OrganizationFormData = {
  name: '',
  businessType: '',
  country: '',
  currency: 'EUR',
  
};

const App: React.FC = () => {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center p-4 md:p-8 animate-in fade-in duration-700">
      {/* Brand Header */}
      <div className="flex items-center gap-2 mb-8 md:mb-12">
        <h2 className="text-slate-900 text-xl font-bold tracking-tight">
          Mint & Slate
        </h2>
      </div>

      <div className="bg-white w-full max-w-4xl rounded-5xl custom-shadow p-8 md:p-16 lg:p-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
              Configura tu Organización
            </h1>
            <p className="text-slate-500 text-lg">
              Define los detalles básicos para comenzar.
            </p>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={organizationSchema}
            onSubmit={async (values, { setSubmitting }) => {
              console.log(values);
              await new Promise((r) => setTimeout(r, 1500));
              alert('Configuración guardada con éxito');
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                {/* Nombre */}
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1">
                    Nombre de la Organización
                  </label>
                  <Field
                    name="name"
                    placeholder="Ej. Restaurante Central"
                    className="w-full px-6 py-4 rounded-full border"
                  />
                  <ErrorMessage
                    name="name"
                    component="p"
                    className="text-red-500 text-sm ml-2"
                  />
                </div>

                {/* Tipo y País */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold ml-1">
                      Tipo de Negocio
                    </label>
                    <div className="relative">
                      <Field
                        as="select"
                        name="businessType"
                        className="w-full px-6 py-4 rounded-full border appearance-none"
                      >
                        <option value="" disabled>
                          Seleccionar tipo
                        </option>
                        {Object.values(BusinessType).map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </Field>
                    </div>
                    <ErrorMessage
                      name="businessType"
                      component="p"
                      className="text-red-500 text-sm ml-2"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold ml-1">
                      País / Región
                    </label>
                    <Field
                      name="country"
                      placeholder="Ej. España"
                      className="w-full px-6 py-4 rounded-full border"
                    />
                    <ErrorMessage
                      name="country"
                      component="p"
                      className="text-red-500 text-sm ml-2"
                    />
                  </div>
                </div>

                {/* Moneda */}
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1">
                    Moneda Principal
                  </label>
                  <Field
                    as="select"
                    name="currency"
                    className="w-full px-6 py-4 rounded-full border"
                  >
                    <option value="EUR">Euro (EUR)</option>
                    <option value="USD">Dólar (USD)</option>
                    <option value="MXN">Peso Mexicano (MXN)</option>
                    <option value="COP">Peso Colombiano (COP)</option>
                  </Field>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full font-bold flex items-center justify-center gap-3 bg-primary text-white cursor-pointer transition-[transform,box-shadow] duration-300
  hover:-translate-y-0.5
  hover:shadow-lg"
                >
                  {isSubmitting ? (
                    <div className="size-6 border-2 rounded-full animate-spin" />
                  ) : (
                    <>
                      Finalizar Configuración
                      <CheckCircleIcon />
                    </>
                  )}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </main>
  );
};

export default App;



export const organizationSchema = Yup.object({
  name: Yup.string()
    .required('El nombre es obligatorio')
    .min(2, 'Debe tener al menos 2 caracteres'),

  businessType: Yup.mixed<BusinessType>()
    .oneOf(Object.values(BusinessType), 'Tipo de negocio inválido')
    .required('Selecciona un tipo de negocio'),

  country: Yup.string()
    .required('El país es obligatorio'),

  currency: Yup.string()
    .required('La moneda es obligatoria'),
});
