class DiverSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :country_from, :diver_cert_level, :age, :disclaimer, :email, :password_digest, :avatar

  has_many :dive_logs
end
