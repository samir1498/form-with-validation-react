import * as yup from "yup"

const schema = yup.object().shape({
  prenom: yup.string().required("Le prénom est requis"),
  nom: yup.string().required("Le nom est requis"),
  email: yup
    .string()
    .email("L'adresse email est invalide")
    .required("L'adresse email est requise"),
  "confirm-email": yup
    .string()
    .email()
    .oneOf([yup.ref("email")], "Les adresses email doivent correspondre")
    .required("La confirmation de l'adresse email est requise"),

  telephone1: yup
    .string()
    .matches(
      /^(\+\d{1,3})?\s*\(?(\d{3})\)?[\s.-]?\s*(\d{3})[\s.-]?\s*(\d{4})$/,
      "Numéro de téléphone invalide"
    )
    .required("Le numéro de téléphone est requis"),
  telephone2: yup
    .string()
    .nullable()
    .optional()
    .matches(
      /^((\+\d{1,3})?\s*\(?(\d{3})\)?[\s.-]?\s*(\d{3})[\s.-]?\s*(\d{4}))?$/,
      "Numéro de téléphone invalide"
    ),
  birthdate: yup
    .date()
    .typeError("La date de naissance est invalide")
    .nullable(true)
    .max(new Date(), "Date de naissance invalide")
    .min(new Date("1900-01-01"), "Date de naissance invalide")
    .required("La date de naissance est requise")
    .test("is-adult", "Vous devez avoir au moins 18 ans", function (value) {
      const cutoffDate = new Date()
      cutoffDate.setFullYear(cutoffDate.getFullYear() - 18)
      return value <= cutoffDate
    }),
  sexe: yup.string().required("Le sexe est requis"),
})

export default schema
