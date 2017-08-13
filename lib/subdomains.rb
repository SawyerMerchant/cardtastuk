module Subdomains
  class Organization
    class << self
      attr_accessor :subdomains
    end

    def self.loaded_subdomains
      return unless load_subdomains?

      @loaded_subdomains ||= ::Organization.by_active.inject({}) do |hash, organization|
        hash[organization.subdomain] = organization
        hash
      end
    end

    def self.load_subdomains?
      ::ActiveRecord::Base.connection.table_exists?("organizations")
    end

    @subdomains ||= loaded_subdomains

    def self.matches?(request)
      subdomains.include?(request.subdomain)
    end

    def self.[](key)
      subdomains[key]
    end
  end
end
