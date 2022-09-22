class Diver < ApplicationRecord
    has_many :dive_logs 
    has_many :dive_sites, through: :dive_logs

    has_secure_password

    validates :disclaimer, acceptance: true
    validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :password, presence: true 
    validates :age, numericality: { greater_than_or_equal_to: 18, less_than_or_equal_to: 100 }
    validates :username, presence: true, uniqueness: true
    validates :name, presence: true
end
