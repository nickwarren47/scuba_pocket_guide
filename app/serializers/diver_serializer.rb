class DiverSerializer < ActiveModel::Serializer
  attributes :id, :name, :country_from, :diver_cert_level, :age, :disclaimer, :email, :password_digest, :avatar
end
