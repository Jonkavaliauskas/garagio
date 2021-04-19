class AuthenticateShopOwner
    prepend SimpleCommand

    def initialize(email, password)
        @email = email
        @password = password
    end

    def call
        JsonWebToken.encode(shop_owner_id: shop_owner.id) if shop_owner
    end

    private

    attr_accessor :email, :password

    def shop_owner
        shop_owner = ShopOwner.find_by_email(email)
        return shop_owner if shop_owner && shop_owner.authenticate(password)

        errors.add :shop_owner_authentication, 'invalid credentials'
        nil
    end
end